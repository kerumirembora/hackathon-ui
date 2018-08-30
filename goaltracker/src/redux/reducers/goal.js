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

export default combineReducers({
  goalAvailableUsers
});