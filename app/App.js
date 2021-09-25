import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Routes from './routes';

import { StatusBar } from 'react-native';

const App = () => {

  //para alterar todo o esquema de cores de um componente
  const theme = {
    ...DefaultTheme,
    roundness: 5,
    colors: {
      ...DefaultTheme.colors,
      primary: "#E50914",
      background: "#3c3c3c",
      text: "#fff",
      placeholder: "#fff",
    },
  };

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#000" />
      <Routes />
    </PaperProvider>
  );
};

export default App;