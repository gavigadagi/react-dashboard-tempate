import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primeicons/primeicons.css';
// import * as serviceWorker from './serviceWorker';

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
