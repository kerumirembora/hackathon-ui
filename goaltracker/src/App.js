import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import { GoalsOverview } from './components';
import configureStore from './store';
import './App.css';

const storeAndHistory = configureStore();

const routes = [
  {
    exact: true,
    path: '/',
    component: GoalsOverview,
    private: false
  }
];

class App extends Component {
  render() {
    return (
      <Provider store={storeAndHistory.store} >
        <Router history={storeAndHistory.history}>
          <div>
            {routes.map(route => (
              <Route
                key={`route-${route.path}`}
                exact={route.exact || false}
                path={route.path}
                component={route.component}
              />
            ))}
          </div>
        </Router>
      </Provider> 
    );
  }
}

export default App;
