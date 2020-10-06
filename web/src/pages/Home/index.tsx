import { hasCurrentEvent } from 'helpers/localStorage/currentEvent';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const HomePage: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    if (!hasCurrentEvent()) {
      history.replace('/events')
    }
  });

  return <h1>Home Page</h1>;
};

export default HomePage;
