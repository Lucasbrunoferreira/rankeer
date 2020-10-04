import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from 'pages/Login';
import NotFound from 'pages/NotFound';

const ExternalRoutes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />

    <Route exact from="/not-found" component={NotFound} />

    <Redirect exact from="/" to='/login' />

    <Redirect from="*" to='/not-found' />
  </Switch>
);

export default ExternalRoutes;
