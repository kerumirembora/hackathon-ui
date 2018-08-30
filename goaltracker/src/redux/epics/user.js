import 'rxjs/add/operator/mergeMap';
import { combineEpics } from 'redux-observable';
import { fetchFromApi } from '../middleware/apiService';
import * as endpoints from "../backend-endpoints";
import { types } from "../actions/user";

export const fetchDataEpic = (actionType, work, okActionCreator, errorActionCreator) => (action$, store) => {
  return  action$.ofType(actionType)
     .mergeMap(action => (work(action, store))
       .then(okActionCreator)
       .catch(errorActionCreator));
}

const postUserAPI = (action, store) => {
  const requestBody = {
    UserName: action.payload.user
  }
  return Promise.all([
    fetchFromApi({
      path: endpoints.userPost, 
      method: 'POST',
      body: requestBody
    })
  ]).then(result => result[0]);
}

export const postUserEpic = fetchDataEpic(
  types.USER_GET_DATA,
  postUserAPI,
  payload => ({ type: types.USER_GET_DATA_DONE, payload }),
  payload => ({ type: types.USER_GET_DATA_ERROR, payload })
);

const getUserGoalDetailsAPI = (action, store) => {  
  return Promise.all([
    fetchFromApi({
      path: endpoints.userGoalDetails(action.payload.userId, action.payload.goalId), 
      method: 'GET'
    })
  ]).then(result => result[0]);
}

export const getUserGoalDetailsEpic = fetchDataEpic(
  types.USER_GET_GOAL_DATA,
  getUserGoalDetailsAPI,
  payload => ({ type: types.USER_GET_GOAL_DATA_DONE, payload }),
  payload => ({ type: types.USER_GET_GOAL_DATA_ERROR, payload })
);

const userEpic = combineEpics(postUserEpic, getUserGoalDetailsEpic);
export default userEpic;