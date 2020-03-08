import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormFields, Button } from '../common';
import { registerUser } from '../../actions';


const formFields = {
    'email': {type: 'input', name: 'email', label: 'Email'},
    'username': {type: 'input', name: 'username', label: 'Username'},
    'password': {type: 'password', minlength: '8', name: 'password', label: 'Password'},
    'confirmPassword': {type: 'password', minlength: '8', name: 'confirmPassword', label: 'Confirm Password'},
};

class ConnectedRegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
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

        const { password, confirmPassword, errors } = this.state;

        if (password === confirmPassword) {
            const { email, username, password} = this.state;

            const formData = {
                email,
                username,
                password
            };

            this.props.registerUser(formData);

            this.setState({
                email: '',
                username: '',
                password: '',
                confirmPassword: '',
            });
        } else {
            const mismatchErrors = {
                ...errors,
                password: ['This field does not match.'],
                confirmPassword: ['This field does not match.']
            }
            this.setState({
                errors: {...mismatchErrors}
            });
        }
    }

    render() {
        const { errors } = this.state;

        const fieldsWithHandler = Object.entries(formFields).map(item => {
            const key = item[0];
            const value = item[1];

            if (key in this.state) {
                let errorName = null;
                if (errors && key in errors) {
                    console.log('this.state.errors: ', errors)
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

const RegistrationForm = connect(mapStateToProps, { registerUser })(ConnectedRegistrationForm);

export default RegistrationForm;
