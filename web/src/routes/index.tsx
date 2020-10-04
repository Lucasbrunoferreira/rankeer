import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import InternalRoutes from './internal.routes';
import ExternalRoutes from './external.routes';

const Routes = () => (
  <Router>
    <ExternalRoutes />

    <InternalRoutes />
  </Router>
);

export default Routes;
