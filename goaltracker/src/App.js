import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import {
  GoalDetail,
  GoalsOverview,
  GoalsCategories,
  CreateGoal,
  Notifications
} from './components';
import configureStore from './store';
import './App.css';
import initialState from './redux/initialState';

const storeAndHistory = configureStore(initialState);

const routes = [
  {
    exact: true,
    path: '/',
    component: GoalsOverview,
    private: false
  },
  {
    path: '/goals/:goalID',
    component: GoalDetail,
    exact: false
  },
  {
    path: '/goals-categories',
    component: GoalsCategories,
    exact: true
  },
  {
    path: '/goals-categories/:catID/new',
    component: CreateGoal,
    exact: false
  },
  {
    path: '/notifications',
    component: Notifications,
    exact: true
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
