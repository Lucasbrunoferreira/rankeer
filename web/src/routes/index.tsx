import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from 'pages/Home';
import Login from 'pages/Login';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />

      <Route exact path="/home" component={Home} />

      <Redirect exact from="/" to='/login' />
    </Switch>
  </Router>
);

export default Routes;
