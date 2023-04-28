import { useRef } from "react";
import useInputValidation from "@/hooks/use-input-validation";
import styles from './PulseInput.module.css';

const isNotEmpty = value => (value.trim() !== '');

const validateInput = (inputVal) => {
    let newStyle = '';
    if(inputVal == 'valid') {
        newStyle = styles.valid;
    } else if(inputVal == 'invalid') {
        newStyle = styles.invalid;
    }
    return newStyle;
};

const PulseInput = (props) => {
    const input1Ref = useRef();
    const input2Ref = useRef();
    const input3Ref = useRef();

    const {
        value: inputValue1,
        inputChangeHandler: input1ChangeHandler,
        inputBlurHandler: input1BlurHandler,
        inputStyles: input1Styles
    } = useInputValidation(isNotEmpty);

    const {
        value: inputValue2,
        inputChangeHandler: input2ChangeHandler,
        inputBlurHandler: input2BlurHandler,
        inputStyles: input2Styles
    } = useInputValidation(isNotEmpty);

    const {
        value: inputValue3,
        inputChangeHandler: input3ChangeHandler,
        inputBlurHandler: input3BlurHandler,
        inputStyles: input3Styles
    } = useInputValidation(isNotEmpty);

    const newStyle1 = validateInput(input1Styles);
    const newStyle2 = validateInput(input2Styles);
    const newStyle3 = validateInput(input3Styles);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredInput1 = input1Ref.current.value;
        const enteredInput2 = input2Ref.current.value;
        const enteredInput3 = input3Ref.current.value;

        const inputs = {
            input1: enteredInput1,
            input2: enteredInput2,
            input3: enteredInput3
        };

        props.onGetPulseInputs(inputs);
    };

    return(
        <form className={styles.control} onSubmit={submitHandler}>
                <label>Please, enter your pulse 3 times:</label>
                <div className={newStyle1}>
                    <input
                        id='user1Input'
                        key='user1Input'
                        ref={input1Ref}
                        value={inputValue1}
                        onChange={input1ChangeHandler}
                        onBlur={input1BlurHandler}
                        type="number"
                        required
                    />
                </div>
                <div className={newStyle2}>
                    <input
                        id='user2Input'
                        key='user2Input'
                        ref={input2Ref}
                        value={inputValue2}
                        onChange={input2ChangeHandler}
                        onBlur={input2BlurHandler}
                        type="number"
                        required
                    />
                </div>
                <div className={newStyle3}>
                    <input
                        id='user1Input'
                        key='user1Input'
                        ref={input3Ref}
                        value={inputValue3}
                        onChange={input3ChangeHandler}
                        onBlur={input3BlurHandler}
                        type="number"
                        required
                    />
                </div>
                <button>Submit</button>
        </form>
    );
};

export default PulseInput;