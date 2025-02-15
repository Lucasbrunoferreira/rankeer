import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import React from 'react';

import Theme from './theme';
import Routes from './routes';

import FlashMessage from "react-native-flash-message";
import { EvaluationProvider } from './context/Evaluation';

export default function App() {
  return (
    <Theme>
      <>
        <EvaluationProvider>
          <Routes />
        </EvaluationProvider>

        <StatusBar style="light" animated backgroundColor="#202225" />

        <FlashMessage position="top" />
      </>
    </Theme>
  );
}
