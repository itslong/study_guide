import React from 'react';


const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.title}</label>
            <input
                readOnly={props.readOnly}
                className={props.className || 'form-input'}
                id={props.id}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                style={props.style}
            />
        </div>
    )
};


export default Input;
