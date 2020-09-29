import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    primary: '#235AAA',
    secundary: '#3498DB',
    tertiary: '#2F2E41',
    background: '#191920',

    text: {
      primary: '#FCFCFC'
    }
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

const Theme = ({ children }: { children: JSX.Element }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
