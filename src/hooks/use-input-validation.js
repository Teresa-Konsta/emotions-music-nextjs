import { useState } from "react";

const useInputValidation = (validateInput) => {
    const [enteredInput, setEnteredInput] = useState('');
    const [inputTouched, setInputTouched] = useState(false);

    const inputValid = validateInput(enteredInput);
    const inputError = !inputValid && inputTouched;
    const untouched = (enteredInput === '') && (inputTouched === false);

    let userText;
    if(inputError) {
        userText = <p>Please, enter a valid input</p>;
    } else {
        userText = null;
    }

    let inputStyles;
    if(!untouched) {
        inputStyles = inputError ? 'invalid' : 'valid';
    } else {
        inputStyles = null;
    }

    const inputChangeHandler = (event) => {
        setInputTouched(true);
        setEnteredInput(event.target.value);
        if(!inputValid) {
            return;
        }
    };

    const inputBlurHandler = (event) => {
        setInputTouched(true);
        if(!inputValid) {
            return;
        }
    };

    const resetInput = () => {
        setEnteredInput('');
        setInputTouched(false);
    };

    return({
        value: enteredInput,
        isValid: inputValid,
        inputChangeHandler,
        inputBlurHandler,
        resetInput,
        inputStyles,
        userText
    });
};

export default useInputValidation;