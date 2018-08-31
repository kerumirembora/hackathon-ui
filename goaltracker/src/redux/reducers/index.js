import { combineReducers } from 'redux';
import goal from './goal';
import user from './user';
import facebook from './facebook';

const reducers = combineReducers({ 
  goal, 
  user,
  facebook
});

export { reducers as goaltracker };