import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    primary: '#235AAA',
    secundary: '#3498DB',

    danger: '#e74c3c',
    positive: '#27AE60',
    warning: '#f39c12',

    background: {
      primary: '#202225',
      secundary: '#27292c',
      highlight: '#343a40'
    },

    text: {
      inDark: '#FCFCFC',
      opaqueInDark: '#AAAAAA',
      inLight: '#050511'
    },
  },
};

const Theme = ({ children }: { children: JSX.Element }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
