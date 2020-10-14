import React, { useEffect } from 'react';
import Theme from './theme';
import Routes from 'routes';
import GlobalStyle from './assets/styles/global';
import { FlashMessageProvider } from 'contexts/FlashMessage';
import { startSocket } from 'services/socket';

function App() {
  useEffect(() => {
    startSocket()
  }, [])

  return (
    <Theme>
      <>
        <GlobalStyle />

        <FlashMessageProvider>
          <Routes />
        </FlashMessageProvider>
      </>
    </Theme>
  );
}

export default App;
