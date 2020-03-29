import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./static/fonts/icomoon/style.css";
import "./static/css/bootstrap.min.css";
//import "./static/css/jquery-ui.css";
//import "./static/css/owl.carousel.min.css";
import "./static/css/owl.theme.default.min.css";
import "./static/css/owl.theme.default.min.css";
import "./static/css/jquery.fancybox.min.css";
import "./static/css/bootstrap-datepicker.css";
import "./static/fonts/flaticon/font/flaticon.css";
import "./static/css/aos.css";
import "./static/css/style.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
