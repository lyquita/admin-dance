import React from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import AppRoutes from './routes';
import theme from './themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Layout /> */}
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
