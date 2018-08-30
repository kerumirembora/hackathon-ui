// import './../node_modules/materialize-css/dist/css/materialize.min.css';
// import './../node_modules/materialize-css/dist/js/materialize.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import initialState from './redux/initialState';

ReactDOM.render(
  <Provider store={configureStore(initialState).store}>
    <App />
  </Provider>
  , 
  document.getElementById('root')
);
registerServiceWorker();
