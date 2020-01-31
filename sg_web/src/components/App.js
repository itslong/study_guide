import React from 'react';
import { List, Form } from './common';


const App = (props) => {
    const { categories, topics, notes } = props.appState;

    return (
        <div>
            <div>
                <h2>Connected components</h2>
                <h3>Categories:</h3>
                <List listName={'categories'} />
            </div>
            <div>
                <h3>Topics:</h3>
                <List listName={'topics'} />
            </div>
            <div>
                <h3>Notes:</h3>
                <List listName={'notes'} />
            </div>
            <Form />
        </div>
    )
};

export default App;
