import { combineEpics } from 'redux-observable';
import userEpic from './user';

const rootEpic = combineEpics(userEpic);
export default rootEpic;

