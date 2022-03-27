import React, { useState } from 'react';


const useInput = (validationHandler) => {


    const [isTouched, setIsTouched] = useState(false);
    const [enteredValue, setEnteredValue] = useState('');

    const valueIsValid = validationHandler(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue = event.target.value;
    }

    const focusHandler = (event) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue, hasError, valueChangeHandler, focusHandler, isValid: valueIsValid, reset
    }
}

export default useInput;