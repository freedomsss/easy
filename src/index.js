import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import MianRoute from './routes/mainRoute';
import './sass/main.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
