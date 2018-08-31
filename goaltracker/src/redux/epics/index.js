import { combineEpics } from 'redux-observable';
import goalEpic from './goal';
import userEpic from './user';
import facebookEpic from './facebook';

const rootEpic = combineEpics(goalEpic, userEpic, facebookEpic);
export default rootEpic;

