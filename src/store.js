import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'react-logger';
import thunk from 'redux-thunk';
import commentReducer from './reducers/commentReducer';

const store = createStore(commentReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;