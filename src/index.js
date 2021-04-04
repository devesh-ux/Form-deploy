import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {library} from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


