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

const getAvailableUsersAPI = (action, store) => {
  const path = endpoints.availableSubscribers(action.payload.userId, action.payload.userGoalId);
  return Promise.all([
    fetchFromApi({
      path: path, 
      method: 'GET'
    })
  ]).then(result => result[0]);
}

export const getAvailableUsersEpic = fetchDataEpic(
  types.GOAL_GET_AVAILABLE_USERS,
  getAvailableUsersAPI,
  payload => ({ type: types.GOAL_GET_AVAILABLE_USERS_DONE, payload }),
  payload => ({ type: types.GOAL_GET_AVAILABLE_USERS_ERROR, payload })
);

const inviteUserAPI = (action, store) => {
  const path = endpoints.addSubscriber(action.payload.userId, action.payload.userGoalId);
  const body = {
    userId: action.payload.inviteUserId
  }
  return Promise.all([
    fetchFromApi({
      path: path, 
      method: 'PUT',
      body: body
    })
  ]).then(result => result[0]);
}

export const inviteUserEpic = fetchDataEpic(
  types.GOAL_INVITE_USER,
  inviteUserAPI,
  payload => push(`/goals/${payload.userGoalId}`),
  payload => ({ type: types.GOAL_INVITE_USER_ERROR, payload })
)

const userEpic = combineEpics(getAvailableUsersEpic, inviteUserEpic);
export default userEpic;