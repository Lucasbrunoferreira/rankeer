import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from 'pages/Login';
import { getToken } from 'helpers/localStorage/token';

const ExternalRoutes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />

      <Redirect exact from="/" to={getToken() ? '/home' : '/login' } />
    </Switch>
  )
};

export default ExternalRoutes;
