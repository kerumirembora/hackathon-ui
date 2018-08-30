import { combineReducers } from 'redux';
import { types } from '../actions/goal';

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
  postGoal
});