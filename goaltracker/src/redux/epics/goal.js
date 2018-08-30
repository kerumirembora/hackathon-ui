import 'rxjs/add/operator/mergeMap';
import { combineEpics } from 'redux-observable';
import { push } from 'react-router-redux';
import { fetchFromApi } from '../middleware/apiService';
import * as endpoints from "../backend-endpoints";
import { types } from "../actions/goal";

export const fetchDataEpic = (actionType, work, okActionCreator, errorActionCreator) => (action$, store) => {
  return  action$.ofType(actionType)
     .mergeMap(action => (work(action, store))
       .then(okActionCreator)
       .catch(errorActionCreator));
}

const postGoalAPI = (action, store) => {
  const requestBody = action.payload;

  return Promise.all([
    fetchFromApi({
      path: endpoints.goalPost(requestBody.userId), 
      method: 'POST',
      body: requestBody
    })
  ]).then(result => result[0]);
}

export const postGoalEpic = fetchDataEpic(
  types.GOAL_NEW,
  postGoalAPI,
  //payload => ({ type: types.GOAL_NEW_DONE, payload }),
  payload => push('/goals/' + payload.userGoalId),
  payload => ({ type: types.GOAL_NEW_ERROR, payload })
);

const goalEpic = combineEpics(postGoalEpic);
export default goalEpic;