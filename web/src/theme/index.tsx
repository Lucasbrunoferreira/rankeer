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

    icon: {
      inDark: '#FFF',
      inLight: '#000'
    },

    input: {
      primary: '#FCFCFC'
    },

    projectColors: ['#2980b9', '#27ae60', '#8e44ad', '#c0392b', '#a78b1d', '#d35400', '#e84393']
  },
  fontSizes: {
    small: '0.8rem',
    regular: '1rem',
    medium: '1.2rem',
    large: '1.5rem',
    big: '1.8rem',
    giant: '3.5rem'
  },
};

const Theme = ({ children }: { children: JSX.Element }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
