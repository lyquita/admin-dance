import React from 'react';
import './App.css';
import routes from './routes';
import theme from './themes';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

function App() {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      {routing}
    </ThemeProvider>
     
  );
}

export default App;
