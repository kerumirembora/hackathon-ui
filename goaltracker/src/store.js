/*
 * src/store.js
 * 
*/

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './redux/reducers';

export default function configureStore(initialState={}) {
  const rootReducer = combineReducers({ ...reducers });

  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}