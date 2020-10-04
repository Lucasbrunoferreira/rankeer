import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from 'helpers/localStorage/token';

interface PrivateRouteProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component, path, exact }) => {
  return !getToken() ? (
    <Redirect to="/login" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PrivateRoute;
