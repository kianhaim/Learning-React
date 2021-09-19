import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== "";
const isEmail = value => value.includes("@");

const BasicForm = props => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: namedInputHasError,

    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredLast,
    isValid: enteredLastNameIsValid,
    hasError: lastNamedInputHasError,

    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,

    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredLastNameIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName, enteredLast, enteredEmail);
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = namedInputHasError
    ? "form-control invalid"
    : "form-control ";

  const lastInputClasses = lastNamedInputHasError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            // ref={nameInputRef}
            type='text'
            id='name'
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {namedInputHasError && (
            <p className={"error-text"}>Name must not be empty!</p>
          )}
        </div>
        <div className={lastInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            // ref={nameInputRef}
            type='text'
            id='name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLast}
          />
          {lastNamedInputHasError && (
            <p className={"error-text"}>Last Name must not be empty!</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          // ref={nameInputRef}
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className={"error-text"}>Please enter valid email!</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
