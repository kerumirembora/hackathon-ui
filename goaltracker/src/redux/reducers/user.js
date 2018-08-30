import { combineReducers } from 'redux';
import { types } from '../actions/user';

const userData = (state = {}, action) => {
  switch (action.type) {
    case types.USER_GET_DATA_DONE:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  userData
});