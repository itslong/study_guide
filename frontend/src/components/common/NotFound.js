import React from 'react';
import { Link } from 'react-router-dom';

import { HOME } from '../../routes/routes';


const NotFound = () => {
    const text = "There doesn't seem to be anything here. Check the Url and try again.";
    const homeLink =  <Link to={HOME}>Home</Link>;
    const homePageText = <p>Click here to return to the {homeLink} here.</p>;

    return (
        <div>
            {text}
            {homePageText}
        </div>
    );
};


export default NotFound;
