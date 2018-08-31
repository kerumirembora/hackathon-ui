import 'rxjs/add/operator/mergeMap';
import { combineEpics } from 'redux-observable';
import { push } from 'react-router-redux';
import { fetchFromApi } from '../middleware/apiService';
import * as endpoints from "../backend-endpoints";
import { types } from "../actions/facebook";

export const fetchDataEpic = (actionType, work, okActionCreator, errorActionCreator) => (action$, store) => {
  return  action$.ofType(actionType)
     .mergeMap(action => (work(action, store))
       .then(okActionCreator)
       .catch(errorActionCreator));
}

const postFacebookMinutesAPI = (action, store) => {
  return Promise.all([
    fetchFromApi({
      path: endpoints.facebook(action.payload.userId, action.payload.minutes), 
      method: 'POST'
    })
  ]).then(result => result[0]);
}

export const postFacebookMinutesEpic = fetchDataEpic(
  types.FB_NEW,
  postFacebookMinutesAPI,
  payload => ({ type: types.GOAL_NEW_DONE, payload }),
  payload => ({ type: types.GOAL_NEW_ERROR, payload })
);

const facebookEpic = combineEpics(postFacebookMinutesEpic);
export default facebookEpic;