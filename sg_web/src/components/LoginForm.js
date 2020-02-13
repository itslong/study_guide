import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormFields, Button } from './common';
import { authenticateUser } from './../js/actions'



const formFields = {
    'username': {type: 'input', name: 'username', label: 'Username'},
    'password': {type: 'input', name: 'password', label: 'Password'},
};

class ConnectedLoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleInputOnChange = this.handleInputOnChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleInputOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        // submit credentials
        const formData = this.state;
        this.props.authenticateUser(formData);

        this.setState({
            username: '',
            password: ''
        })
    }


    render() {
        if (this.props.isAuthenticated) {
            // return Redirect to home
        }

        const fieldsWithHandler = Object.entries(formFields).map(item => {
            const key = item[0];
            const value = item[1];

            if (key in this.state) {
                return {
                    ...value,
                    value: this.state[key],
                    onChange: this.handleInputOnChange
                };
            }
        });

        return (
            <form>
                <FormFields fields={fieldsWithHandler} />
                <div>
                    <Button 
                        id={'submit-login'}
                        title={'Login'}
                        action={this.handleLogin}
                    />
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    const { isAuthenticated } = state.user;
    return {
        isAuthenticated
    }
}

const LoginForm = connect(mapStateToProps, { authenticateUser })(ConnectedLoginForm);

export default LoginForm;
