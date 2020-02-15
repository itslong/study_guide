import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { LOGIN } from '../../routes/routes';


const ConnectedPrivateRoute = ({ component: Component, user, ...rest }) => {
    const { isLoading, isAuthenticated, username, userId } = user;

    return (
        <Route
            {...rest}
            render={(props) => {
                if (isLoading || isAuthenticated && !userId) {
                    return <div>Loading...</div>;
                } else if (!isAuthenticated) {
                    return <Redirect to={LOGIN} />;
                } else {
                    return <Component {...props} />
                }
            }}
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
