import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkeRegistration from "./serviceWorkeRegistration";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkeRegistration.register();