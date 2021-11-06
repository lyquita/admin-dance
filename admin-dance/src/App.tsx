import React from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import AppRoutes from './routes';
import theme from './themes';
import TopNavBar from './components/global/TopNavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopNavBar />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
