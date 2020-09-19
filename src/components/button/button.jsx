import React from 'react';
import './button.scss'

export const Button = props => {
    const onClickInternal = e => {
        e.stopPropagation();
        props.onClick && props.onClick();
    };

    return (
        <button
            {...props}
            type={props.type || 'submit'}
            onClick={onClickInternal}
        >
            {props.children}
        </button>
    );
};
