import React from 'react';

import { List, Form } from './common';
import MainRoutes from './MainRoutes';


// TODO: convert to class component: if token found in browser, fetch user info with token and populate state.
const App = (props) => {
    return (
        <div>
            <MainRoutes />
        </div>
    )
};

export default App;
