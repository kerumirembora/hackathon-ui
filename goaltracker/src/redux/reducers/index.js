import { combineReducers } from 'redux';
import user from './user';
import goal from './goal';

const reducers = combineReducers({ 
  user,
  goal
});

export { reducers as goaltracker };