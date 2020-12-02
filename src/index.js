import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/main.scss'
import CssBaseline from '@material-ui/core/CssBaseline';

//

// const express = require('express');
// const request = require('request');
// const cors    = require('cors');
// const app     = express();

// app.use(cors());

// app.get('/representatives/:state',
//   findRepresentativesByState,
//   jsonResponse
// );

// app.get('/senators/:state',
//   findSenatorsByState,
//   jsonResponse
// );

// function findRepresentativesByState(req, res, next) {
//   const url = `http://whoismyrepresentative.com/getall_reps_bystate.php?state=${req.params.state}&output=json`;
//   request(url, handleApiResponse(res, next));
// }

// function findSenatorsByState(req, res, next) {
//   const url = `http://whoismyrepresentative.com/getall_sens_bystate.php?state=${req.params.state}&output=json`;
//   request(url, handleApiResponse(res, next));
// }

// function handleApiResponse(res, next) {
//   return (err, response, body) => {
//     if (err || body[0] === '<') {
//       res.locals = {
//         success: false,
//         error: err || 'Invalid request. Please check your state variable.'
//       };
//       return next();
//     }
//     res.locals = {
//       success: true,
//       results: JSON.parse(body).results
//     };
//     return next();
//   };
// }

// function jsonResponse(req, res, next) {
//   return res.json(res.locals);
// }

// const server = app.listen(3000, () => {
//   const host = server.address().address,
//     port = server.address().port;

//   console.log('API listening at http://%s:%s', host, port);
// });


//

ReactDOM.render(
  <div>

    <CssBaseline />
    <App />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
