import React from 'react';
import Theme from './theme';
import Routes from 'routes';
import GlobalStyle from './assets/styles/global';
import { FlashMessageProvider } from 'contexts/FlashMessage';

function App() {
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
