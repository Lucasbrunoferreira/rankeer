import { hasCurrentEvent } from 'helpers/localStorage/currentEvent';
import React, { useEffect } from 'react';
import InternalLayout from 'layouts/Internal';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import MyProject from './MyProject';
import BusinessModel from './BusinessModel ';
import Team from './Team';
import MyEvents from './MyEvents';

const HomePage: React.FC = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  useEffect(() => {
    if (!hasCurrentEvent()) {
      history.replace('/events')
    }
  });

  return (
    <InternalLayout>
      <Switch>
        <Route path={`${path}/meu-projeto`} component={MyProject} />

        <Route path={`${path}/modelo-negocios`} component={BusinessModel} />

        <Route path={`${path}/equipe`} component={Team} />

        <Route path={`${path}/meus-eventos`} component={MyEvents} />
      </Switch>
    </InternalLayout>
  );
};

export default HomePage;
