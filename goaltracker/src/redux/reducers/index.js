import { combineReducers } from 'redux';
import goal from './goal';
import user from './user';

const reducers = combineReducers({ 
  goal, 
  user 
});

export { reducers as goaltracker };