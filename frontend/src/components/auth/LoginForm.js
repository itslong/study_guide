import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { FormFields, Button } from '../common';
import { authenticateUser } from '../../actions';
import { HOME, REGISTER } from '../../routes/routes';


const formFields = {
    'username': {type: 'input', name: 'username', label: 'Username'},
    'password': {type: 'password', name: 'password', label: 'Password'}
};

class ConnectedLoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: this.props.authErrors
        };

        this.handleInputOnChange = this.handleInputOnChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.redirectToRegister = this.redirectToRegister.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.authErrors !== this.props.authErrors) {
            this.setState({
                errors: this.props.authErrors
            });
        }
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
        });
    }

    redirectToRegister(e) {
        e.preventDefault();
        this.props.history.push(REGISTER);
    }


    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to={HOME} />
        }

        const { errors } = this.state;

        const fieldsWithHandler = Object.entries(formFields).map(item => {
            const key = item[0];
            const value = item[1];

            if (key in this.state) {
                let errorName = null
                if (errors && key in errors) {
                    // django passes dict: key: [string]
                    errorName = errors[key].toString()
                }

                return {
                    ...value,
                    value: this.state[key],
                    onChange: this.handleInputOnChange,
                    fieldError: errorName
                };
            }
        });


        // handle when django passes 'non_field_errors' for authentication errors.
        const displayNonFieldErrors = errors && errors['non_field_errors'] ?
            <div className={'error'}>{errors['non_field_errors'][0]}</div>
            : '';


        return (
            <form>
                <FormFields fields={fieldsWithHandler} />
                {displayNonFieldErrors}
                <div>
                    <Button 
                        id={'submit-login'}
                        title={'Login'}
                        action={this.handleLogin}
                    />
                </div>
                <div>
                    <Button 
                        id={'redirect-to-register'}
                        title={'Register'}
                        action={this.redirectToRegister}
                    />
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    const { isAuthenticated, authErrors } = state.user;
    return {
        isAuthenticated,
        authErrors
    }
}

const LoginForm = connect(mapStateToProps, { authenticateUser })(ConnectedLoginForm);

export default withRouter(LoginForm);
