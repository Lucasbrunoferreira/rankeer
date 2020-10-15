import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getToken } from 'helpers/localStorage/token';

import Login from 'pages/Login';
import Ranking from 'pages/Ranking';

const ExternalRoutes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />

      <Route exact path="/ranking/:id" component={Ranking} />

      <Redirect exact from="/" to={getToken() ? '/eventos' : '/login' } />
    </Switch>
  )
};

export default ExternalRoutes;
