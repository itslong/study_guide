import { combineReducers } from 'redux';

export { default as exampleReducer } from './examples';
import categoryReducers from './categoryReducers';
import authReducers from './authReducers';


export const rootReducer = combineReducers({
    categories: categoryReducers,
    user: authReducers
});
