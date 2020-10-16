import React, { useState, useEffect } from 'react';
import Styles from './styles';
import { useHistory } from 'react-router-dom';
import useProjectContext from 'hooks/useProjectContext';
import { clearCurrentEvent, getCurrentEvent } from 'helpers/localStorage/currentEvent';

import { ReactComponent as UsersIcon } from 'assets/svg/users.svg';
import { ReactComponent as LayoutIcon } from 'assets/svg/layout.svg';
import { ReactComponent as ListIcon } from 'assets/svg/list.svg';
import { ReactComponent as BoxIcon } from 'assets/svg/box.svg';

import { ReactComponent as GridIcon } from 'assets/svg/grid.svg';


interface Route {
  path: string;
  icon: any;
  name: string;
  role: 'participant' | 'admin';
}

const SideMenu: React.FC = () => {
  const history = useHistory();
  const currentEvent = getCurrentEvent();
  const { color } = useProjectContext();

  const routes: Route[] = [
    {
      path: '/home/meu-projeto',
      icon: BoxIcon,
      name: 'Meu Projeto',
      role: 'participant',
    },
    {
      path: '/home/modelo-negocios',
      icon: LayoutIcon,
      name: 'Modelo de Negócios',
      role: 'participant'
    },
    {
      path: '/home/equipe',
      icon: UsersIcon,
      name: 'Equipe',
      role: 'participant'
    },
    {
      path: '/home/meu-evento',
      icon: ListIcon,
      name: 'Meu Evento',
      role: 'admin',
    },
  ]

  const [currentRoute, setCurrentRoute] = useState<Route>();

  const backToEvents = () => {
    clearCurrentEvent();
    history.replace('/eventos');
  }

  const handleSelectedRoute = (route: Route) => {
    setCurrentRoute(route);
    history.replace(route.path);
  }

  useEffect(() => {
    currentEvent?.isAdmin ? setCurrentRoute(routes[1]) : setCurrentRoute(routes[0]);
    // eslint-disable-next-line
  }, [])

  const renderRoute = (route: Route) => {
    if ((currentEvent?.isAdmin && route.role === 'admin') || (!currentEvent?.isAdmin && route.role === 'participant')) {
      return (
        <Styles.Route onClick={() => handleSelectedRoute(route)} color={color} isActive={route.name === currentRoute?.name} key={route.name}>
          <Styles.IconWrapper>
            <route.icon width={20} />
          </Styles.IconWrapper>

          <Styles.Text>{route.name}</Styles.Text>
        </Styles.Route>
      );
    };
  };

  return (
    <Styles.SideMenu>
      <Styles.Navigation>
        {routes.map(route => renderRoute(route))}
      </Styles.Navigation>

      <Styles.Options>
        <Styles.OptionItem onClick={backToEvents}>
          <Styles.IconWrapper>
            <GridIcon width={20} />
          </Styles.IconWrapper>

          <Styles.Text>Eventos</Styles.Text>
        </Styles.OptionItem>
      </Styles.Options>
    </Styles.SideMenu>
  );
};

export default SideMenu;
