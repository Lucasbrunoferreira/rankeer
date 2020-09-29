import React from 'react';
import Theme from './theme';
import Routes from 'routes';
import GlobalStyle from './assets/styles/global';

function App() {
  return (
    <Theme>
      <>
        <GlobalStyle />
        <Routes />
      </>
    </Theme>
  );
}

export default App;
