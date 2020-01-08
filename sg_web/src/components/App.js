import React from 'react';

import List from './examples/List';
import Form from './examples/Form';
import Post from './examples/Posts';


const App = () => {
    return (
        <>
        <div>
            <h2>Articles</h2>
            <List />
        </div>
        <div>
            <h2>Add a new article</h2>
            <Form />
        </div>
        <div>
            <h2>API posts</h2>
            <Post />
        </div>
        </>
    )
};

export default App;
