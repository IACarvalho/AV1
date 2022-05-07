import * as React from 'react'
import Routes from './src/routes'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#025E33',
    accent: '#9FEF86',
  },
}

export default function App() {
  return (
    <PaperProvider theme={ theme }>
      <Routes />
    </PaperProvider>
  );
}