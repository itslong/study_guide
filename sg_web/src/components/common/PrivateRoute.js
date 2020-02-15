import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { LOGIN } from '../../routes/routes';


const ConnectedPrivateRoute = ({ component: Component, user, ...rest }) => {
    const userIsAuth = (props) => {
        if (user.isLoading) {
            return <div>Loading...</div>;
        } else if (!user.isAuthenticated) {
            return <Redirect to={LOGIN} />;
        } else {
            return <Component {...props} />
        }
    };

    return (
        <Route
            {...rest}
            render={userIsAuth}
        />
    )
};

const mapStateToProps = (state) => {
    const { user } = state;

    return {
        user
    }
};


const PrivateRoute = connect(mapStateToProps)(ConnectedPrivateRoute);

export default PrivateRoute;
