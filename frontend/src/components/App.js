import React, { Component } from 'react';
import { connect } from 'react-redux';

import { List, Form } from './common';
import MainRoutes from './MainRoutes';
import { fetchUserInfo } from '../actions';


class ConnectedApp extends Component {
    componentDidMount() {
        const { userId, token, isAuthenticated } = this.props.user;

        if (token && !userId) {
            this.props.fetchUserInfo(token);
        }
    }

    render() {
        return (
            <div>
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


const App = connect(mapStateToProps, { fetchUserInfo })(ConnectedApp);

export default App;
