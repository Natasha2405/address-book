import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
// reducers
import reducers from './ducks/index';

export default createStore(reducers, applyMiddleware(thunk, createLogger()));