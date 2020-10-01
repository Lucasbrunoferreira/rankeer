import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    primary: '#235AAA',
    secundary: '#3498DB',
    tertiary: '#2F2E41',

    background: {
      primary: '#010105',
      darker: '#050511',
    },

    text: {
      inDark: '#FCFCFC',
      inLight: '#050511'
    },

    icon: {
      inDark: '#FFF',
      inLight: '#000'
    },

    input: {
      primary: '#FCFCFC'
    }
  },
  fontSizes: {
    small: '0.8rem',
    regular: '1rem',
    medium: '1.2rem',
    large: '1.5rem',
    big: '1.8rem'
  },
};

const Theme = ({ children }: { children: JSX.Element }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
