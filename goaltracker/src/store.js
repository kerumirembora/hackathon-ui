import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { goaltracker } from './redux/reducers';
import { createHashHistory as createHistory } from 'history';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './redux/epics';

let storeAndHistoryInstance = null;

export default function configureStore(initialState={}) {
  if (storeAndHistoryInstance) {
    return storeAndHistoryInstance;
  }

  const history = createHistory();
  const historyMiddleware = routerMiddleware(history);

  const epicMiddleware = createEpicMiddleware();

  const middleware = [
    epicMiddleware,
    historyMiddleware,
    reduxImmutableStateInvariant(),
    thunkMiddleware
  ];

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */

  const rootReducer = combineReducers({ ...goaltracker, router: routerReducer });

  const store = createStore(
    rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware))
  );

  epicMiddleware.run(rootEpic);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./redux/reducers', () => {
      const nextReducer = require('./redux/reducers/index').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  storeAndHistoryInstance = { store, history };
  return storeAndHistoryInstance;
}