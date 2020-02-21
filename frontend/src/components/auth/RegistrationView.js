import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RegistrationForm from './RegistrationForm';
import { HOME } from '../../routes/routes';



class ConnectedRegistrationView extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        const { isAuthenticated } = this.props.user;
        if (isAuthenticated) {
            return (
                <Redirect to={HOME} />
            );
        }
    }

    render() {
        const { isAuthenticated } = this.props.user;
        if (isAuthenticated) {
            return (
                <Redirect to={HOME} />
            );
        }
        return (
            <RegistrationForm />
        );
    }

}

const mapStateToProps = (state) => {
    const { user } = state;
    return {
        user
    };
};

const RegistrationView = connect(mapStateToProps, {})(ConnectedRegistrationView);

export default RegistrationView;
