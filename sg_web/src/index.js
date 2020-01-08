import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App as Example } from './components/examples/App';
import App from './components/App';
import { exampleStore as store } from './js/store';


// delete when react-router is implemented.
const OptionalApp = window.location.pathname == '/example/' ? Example : App;

ReactDOM.render(
    <Provider store={store}>
        <OptionalApp />
    </Provider>,
    document.getElementById('root')
);
