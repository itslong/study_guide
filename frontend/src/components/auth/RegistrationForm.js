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
            confirmPassword: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { password, confirmPassword } = this.state;

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
        }
    }

    render() {
        const fieldsWithHandler = Object.entries(formFields).map(item => {
            const key = item[0];
            const value = item[1];

            if (key in this.state) {
                return {
                    ...value,
                    value: this.state[key],
                    onChange: this.handleInput
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
    const { isAuthenticated } = state.user;
    return {
        isAuthenticated
    }
};

const RegistrationForm = connect(mapStateToProps, { registerUser })(ConnectedRegistrationForm);

export default RegistrationForm;
