import React, { Component } from 'react';
import { connect } from 'react-redux';

import { List, Form, Button } from './common';
import MainRoutes from './MainRoutes';
import { fetchUserInfo, logoutUser } from '../actions';


class ConnectedApp extends Component {
    componentDidMount() {
        const { userId, token } = this.props.user;

        if (token && !userId) {
            this.props.fetchUserInfo(token);
        }
    }

    render() {
        const { isAuthenticated } = this.props.user;

        const logoutButton = isAuthenticated ?
            <Button 
                id={'logut'}
                title={'Logout'}
                action={() => this.props.logoutUser()}
            /> : '';

        return (
            <div>
                <div>
                    {logoutButton}
                </div>
                <MainRoutes />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state;

    return {
        user
    }
};


const App = connect(mapStateToProps, { fetchUserInfo, logoutUser })(ConnectedApp);

export default App;
