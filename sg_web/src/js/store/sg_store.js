import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { sgReducer as rootReducer } from '../reducers';


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger();

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(thunk, logger))
);


export default store;
