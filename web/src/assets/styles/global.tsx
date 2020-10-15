import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    font-family: 'Raleway', sans-serif !important;
  }

  body {
    background-color: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.text.inDark};
  }

  @keyframes pulse {
    0% {
      transform: scale(0.85);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;

export default GlobalStyle;
