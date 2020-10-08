import { hasCurrentEvent, getCurrentEvent } from 'helpers/localStorage/currentEvent';
import React, { useEffect } from 'react';
import InternalLayout from 'layouts/Internal';
import { Switch, Route, Redirect, useRouteMatch, useHistory } from 'react-router-dom';

const HomePage: React.FC = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const currentEvent = getCurrentEvent();

  useEffect(() => {
    if (!hasCurrentEvent()) {
      history.replace('/events')
    }
  });


  const screen1 = () => {
    return (
      <h1>Meu projeto</h1>
    )
  }

   const screen2 = () => {
    return (
      <h1>Plano de negócios</h1>
    )
  }

  const screen3 = () => {
    return (
      <h1>Equipe</h1>
    )
  }

  const screen4 = () => {
    return (
      <h1>Equipe</h1>
    )
  }

  return (
    <InternalLayout>
      <Switch>
        <Redirect
          exact
          from="/home"
          to={
            currentEvent.isAdmin
              ? `${path}/eventos`
              : `${path}/meu-projeto`
          }
        />

        <Route path={`${path}/meu-projeto`} component={screen1} />

        <Route path={`${path}/plano-negocios`} component={screen2} />

        <Route path={`${path}/equipe`} component={screen3} />

        <Route path={`${path}/eventos`} component={screen4} />
      </Switch>
    </InternalLayout>
  );
};

export default HomePage;
