import { hasCurrentEvent, getCurrentEvent } from 'helpers/localStorage/currentEvent';
import React, { useEffect } from 'react';
import InternalLayout from 'layouts/Internal';
import { Switch, Route, Redirect, useRouteMatch, useHistory } from 'react-router-dom';

import MyProject from './MyProject';
import BussinessPlan from './BusinessPlan';
import Team from './Team';
import MyEvents from './MyEvents';

const HomePage: React.FC = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const currentEvent = getCurrentEvent();

  useEffect(() => {
    if (!hasCurrentEvent()) {
      history.replace('/events')
    }
  });

  return (
    <InternalLayout>
      <Switch>
        <Redirect
          exact
          from="/home"
          to={
            currentEvent?.isAdmin
              ? `${path}/meus-eventos`
              : `${path}/meu-projeto`
          }
        />

        <Route path={`${path}/meu-projeto`} component={MyProject} />

        <Route path={`${path}/plano-negocios`} component={BussinessPlan} />

        <Route path={`${path}/equipe`} component={Team} />

        <Route path={`${path}/meus-eventos`} component={MyEvents} />
      </Switch>
    </InternalLayout>
  );
};

export default HomePage;
