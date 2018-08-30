import { combineEpics } from 'redux-observable';
import userEpic from './user';
import goalEpic from './goal';

const rootEpic = combineEpics(
    userEpic,
    goalEpic
);
export default rootEpic;

