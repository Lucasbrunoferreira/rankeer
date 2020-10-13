import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from 'components';

import Home from 'pages/Home';
import Events from 'pages/Events';
import NewProject from 'pages/NewProject';

const InternalRoutes = () => (
  <Switch>
    <PrivateRoute exact={false} path="/home" component={Home} />

    <PrivateRoute exact path="/novo-projeto" component={NewProject} />

    <PrivateRoute exact path="/events" component={Events} />
  </Switch>
);

export default InternalRoutes;
