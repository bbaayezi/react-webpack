import React from 'react';
import ReactDOM from 'react-dom';
import App from '../jsx/container/App.jsx';
import '../css/style.css';
import {Provider} from 'react-redux';

import {createStore} from 'redux';
import commentReducer from '../reducers/commentReducer';
import store from '../store'

ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('app'))