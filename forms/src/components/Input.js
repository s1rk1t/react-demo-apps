import React, { useState } from 'react';
import useInput from '../hooks/use-input.js';

export const Input = props => {

    const {
        value: enteredValue,
        hasError,
        valueChangeHandler: inputChangeHandler,
        focusHandler: inputBlurHandler,
        isValid: inputIsValid,
        reset: resetValuesToDefaultState
        // } = useInput(value => value.trim() !=='')
    } = useInput(props.validityFunction);

    return (
        <div className={props.className}>
            <label htmlFor={props.htmlFor}>{props.enteredValue}</label>
            <input onFocus={inputBlurHandler} onChange={inputChangeHandler} type={props.type} id={props.id} />
        </div>
    )
}