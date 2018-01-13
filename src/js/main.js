import React from 'react';
import ReactDOM from 'react-dom';
import App from '../jsx/App.jsx';
import '../css/style.css';

import { createStore } from 'redux';

ReactDOM.render(
    <App />,
    document.getElementById('app')
)