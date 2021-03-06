import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { App as Example } from './components/examples/App';
import App from './components/App';
import { exampleStore, sgStore } from './store';
import history from './components/history';


// delete when react-router is implemented.
let OptionalStore = sgStore;
let OptionalAppState = sgStore.getState();
let OptionalApp = <App />;


if (window.location.pathname == '/example/') {
    OptionalStore = exampleStore;
    OptionalAppState = exampleStore.getState();
    OptionalApp = <Example appState={OptionalAppState} />;
}


ReactDOM.render(
    <Provider store={OptionalStore}>
        <Router history={history}>
            {OptionalApp}
        </Router>
    </Provider>,
    document.getElementById('root')
);
