import React from 'react';

import { Input } from './';


const FormFields = ({ fields, submitHandler=null }) => {
    const formFields = fields.map((field, index) => {
        const { type, name, onChange, label, value, minlength, fieldError } = field;

        if (type === 'input') {
            return (
                <Input 
                    key={name} 
                    type={type} 
                    name={name} 
                    title={label} 
                    handleChange={onChange}
                    value={value}
                    fieldError={fieldError}
                />
            );
        }

        if (type === 'password') {
            return (
                <Input
                    required
                    key={name} 
                    type={type} 
                    name={name} 
                    title={label} 
                    handleChange={onChange}
                    minlength={minlength}
                    value={value}
                    fieldError={fieldError}
                />
            );
        }
    });

    return (
        <div>
            {formFields}
        </div>
    )

}

export default FormFields;
