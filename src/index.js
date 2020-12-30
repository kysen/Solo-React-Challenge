import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/main.scss'
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <div>

    <CssBaseline />
    <App />
  </div>,
  document.getElementById('root')
);

reportWebVitals();
