import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CategoryView from './categories/CategoryView';
import LoginForm from './LoginForm';
import { PrivateRoute } from './common';
import { LOGIN, HOME } from '../routes/routes';



const MainRoutes = () => {
    return ( 
        <Switch>
            <PrivateRoute exact path={HOME} component={CategoryView} />
            <Route exact path={LOGIN} component={LoginForm} />
        </Switch>
    )
};


export default MainRoutes;
