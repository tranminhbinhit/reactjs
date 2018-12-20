import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App/layout/App';
import registerServiceWorker from './registerServiceWorker';
import store from './App/redux/store'
import { Provider } from 'react-redux'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
