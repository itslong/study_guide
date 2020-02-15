import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { LOGIN } from '../../routes/routes';


const ConnectedPrivateRoute = ({ component: Component, user, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (user.isLoading) {
                    return <div>Loading...</div>;
                } else if (!user.isAuthenticated) {
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
