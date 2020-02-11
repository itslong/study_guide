import React from 'react';

import { List, Form } from './common';
import CategoryAddForm from './CategoryAddForm';
import CategoryView from './categories/CategoryView';


const App = (props) => {
    return (
        <div>
            <div>
                <h2>Connected components</h2>
                <h3>Categories:</h3>
                <CategoryView />
            </div>
            <CategoryAddForm />
        </div>
    )
};

export default App;
