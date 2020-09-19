import React from 'react';
import './input.scss'

export const Input = props => {
    const onChangeInternal = e =>
        props.onChange && props.onChange(e.target.value);

    const onBlurInternal = e =>
        props.onBlur && props.onBlur(e.target.value);

    return (<input
            {...props}
            onBlur={onBlurInternal}
            onChange={onChangeInternal}
            onKeyPress={props.onKeyPress}
        >
            {props.children}
        </input>

    )

};
