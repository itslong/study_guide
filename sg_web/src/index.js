import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App as Example } from './components/examples/App';
import App from './components/App';
import { exampleStore, sgStore } from './js/store';


// delete when react-router is implemented.
let OptionalStore = sgStore;
let OptionalAppState = sgStore.getState();
let OptionalApp = <App appState={OptionalAppState} />;


if (window.location.pathname == '/example/') {
    OptionalStore = exampleStore;
    OptionalAppState = exampleStore.getState();
    OptionalApp = <Example appState={OptionalAppState} />;
}


ReactDOM.render(
    <Provider store={OptionalStore}>
        {OptionalApp}
    </Provider>,
    document.getElementById('root')
);
