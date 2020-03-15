import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormFields, Button } from '../common';
import { registerUser, userRegisterFail } from '../../actions';


const formFields = {
    'email': {type: 'input', name: 'email', label: 'Email'},
    'username': {type: 'input', name: 'username', label: 'Username'},
    'password': {type: 'password', minlength: '8', name: 'password', label: 'Password'},
    'confirm_password': {type: 'password', minlength: '8', name: 'confirm_password', label: 'Confirm Password'},
};

class ConnectedRegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            password: '',
            confirm_password: '',
            errors: this.props.registrationErrors
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.registrationErrors !== this.props.registrationErrors) {
            this.setState({
                errors: this.props.registrationErrors
            });
        }
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { password, confirm_password, email, username } = this.state;

        const formData = {
            email,
            username,
            password,
            confirm_password
        };

        const registerUser = this.props.registerUser(formData);
        registerUser.then(response => {
            const { errors: respErr } = response;
            const { password, confirm_password, errors } = this.state;

            if (password !== confirm_password) {
                const misMatchErr = ['These fields must match.'];

                // state expects errors to be placed inside an 'errors' key.
                const extraErrs = {
                    errors: {
                        ...respErr,
                        password: misMatchErr,
                        confirm_password: misMatchErr
                    }
                };

                this.props.userRegisterFail(extraErrs)
            }

            if (!errors) {
                this.setState({
                    email: '',
                    username: '',
                    password: '',
                    confirm_password: '',
                });
            }
        });
    }

    render() {
        const { errors } = this.state;

        const fieldsWithHandler = Object.entries(formFields).map(item => {
            const key = item[0];
            const value = item[1];

            if (key in this.state) {
                let errorName = null;
                if (errors && key in errors) {
                    errorName = errors[key].toString();
                }

                return {
                    ...value,
                    value: this.state[key],
                    onChange: this.handleInput,
                    fieldError: errorName
                };
            }
        });

        return (
            <div>
                <FormFields fields={fieldsWithHandler} />
                <Button 
                    id={'submit'}
                    title={'Register'}
                    action={this.handleSubmit}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const { isAuthenticated, registrationErrors } = state.user;
    return {
        isAuthenticated,
        registrationErrors
    };
};

const RegistrationForm = connect(mapStateToProps, { registerUser, userRegisterFail })(ConnectedRegistrationForm);

export default RegistrationForm;
