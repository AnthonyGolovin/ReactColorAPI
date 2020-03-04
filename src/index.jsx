import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';


ReactDOM.render(<AppContainer><HashRouter><App /></HashRouter></AppContainer>, document.getElementById('react-app-root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.