import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from 'components';

import Home from 'pages/Home';
import Events from 'pages/Events';

const InternalRoutes = () => (
  <Switch>
    <PrivateRoute exact={false} path="/home" component={Home} />

    <PrivateRoute exact path="/events" component={Events} />
  </Switch>
);

export default InternalRoutes;
