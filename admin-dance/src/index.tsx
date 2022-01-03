import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'https://api-dance.hireoo.fun/';
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  , document.getElementById('root')
);
