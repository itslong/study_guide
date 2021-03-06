import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { exampleReducer } from '../reducers';
import { forbiddenWordsMiddleware } from '../middleware';


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    exampleReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);


export default store;
