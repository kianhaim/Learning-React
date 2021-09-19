import { useState, useEffect } from "react";

const SimpleInput = props => {
  // const nameInputRef = useRef();

  // Validated every key stroke , and can be reset
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid]);

  // Input handler
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  // When input is touched
  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  // Handler for submitting the form
  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName("");
    setEnteredNameTouched(false);

    // Use for one once validation eg. submitting the form
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          // ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className={"error-text"}>Name must not be empty!</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
