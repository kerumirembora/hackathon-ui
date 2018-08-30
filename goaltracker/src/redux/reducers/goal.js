import { combineReducers } from 'redux';
import { types } from '../actions/goal';

const goalAvailableUsers = (state = [], action) => {
  switch (action.type) {
    case types.GOAL_GET_AVAILABLE_USERS_DONE:
      return action.payload;
    default:
      return state;
  }
}
const postGoal = (state = {}, action) => {
  switch (action.type) {
    case types.GOAL_NEW_DONE:
      return { payload: action.payload, success: true };
    case types.GOAL_NEW_ERROR:
      return { payload: action.payload, error: true };
    default:
      return state;
  }
}

export default combineReducers({
  goalAvailableUsers,
  postGoal
});