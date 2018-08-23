import { combineReducers } from 'redux';

const bsReducer = (state = {}, action) => {
  switch (action.type) {
   case 'BS_ACTION':
    return {
     result: action.payload
    }
   default:
    return state
  }
}

export default combineReducers({ bsReducer });