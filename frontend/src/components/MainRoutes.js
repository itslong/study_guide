import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CategoryView from './categories/CategoryView';
import { LoginForm, RegistrationForm } from './auth';
import { PrivateRoute, NotFound } from './common';
import { LOGIN, HOME, REGISTER } from '../routes/routes';



const MainRoutes = () => {
    return ( 
        <Switch>
            <PrivateRoute exact path={HOME} component={CategoryView} />
            <Route exact path={LOGIN} component={LoginForm} />
            <Route exact path={REGISTER} component={RegistrationForm} />
            <Route component={NotFound} />
        </Switch>
    )
};


export default MainRoutes;
