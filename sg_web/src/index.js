import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App as Example } from './components/examples/App';
import App from './components/App';
import { exampleStore, sgStore } from './js/store';


// delete when react-router is implemented.
let OptionalApp = App;
let OptionalStore = sgStore;
let OptionalAppState = sgStore.getState();

if (window.location.pathname == '/example/') {
    OptionalApp = Example;
    OptionalStore = exampleStore;
    OptionalAppState = exampleStore.getState();
}

ReactDOM.render(
    <Provider store={OptionalStore}>
        <OptionalApp appState={OptionalAppState} />
    </Provider>,
    document.getElementById('root')
);
