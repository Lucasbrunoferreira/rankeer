import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from 'components';

import Home from 'pages/Home';
import Events from 'pages/Events';

const InternalRoutes = () => (
  <Switch>
    <PrivateRoute exact path="/home" component={Home} />

    <Route exact path="/events" component={Events} />
  </Switch>
);

export default InternalRoutes;
