import { combineEpics } from 'redux-observable';
import goalEpic from './goal';
import userEpic from './user';

const rootEpic = combineEpics(goalEpic, userEpic);
export default rootEpic;

