import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from 'components';

import Home from 'pages/Home';

const InternalRoutes = () => (
  <Switch>
    <PrivateRoute exact path="/home" component={Home} />
  </Switch>
);

export default InternalRoutes;
