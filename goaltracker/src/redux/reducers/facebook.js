import { combineReducers } from 'redux';
import { types } from '../actions/facebook';

const postFacebookMinutes = (state = {}, action) => {
  switch (action.type) {
    case types.FB_NEW_DONE:
      return { payload: action.payload, success: true };
    case types.FB_NEW_ERROR:
      return { payload: action.payload, error: true };
    default:
      return state;
  }
}

export default combineReducers({
    postFacebookMinutes
});