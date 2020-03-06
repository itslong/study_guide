import React from 'react';


const Input = (props) => {
    const displayFieldError = props.fieldError ?
        <div className={'error'} style={{display: 'inline'}}>{props.fieldError}</div>
        : '';

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
            {displayFieldError}
        </div>
    )
};


export default Input;
