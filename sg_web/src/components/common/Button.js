import React from 'react';


const Button = (props) => {
    return (
        <button
            id={props.id}
            className={props.type}
            name={props.name}
            title={props.title}
            style={props.style}
            onClick={props.action}
        >
            {props.title}
        </button>
    )
};


export default Button;
