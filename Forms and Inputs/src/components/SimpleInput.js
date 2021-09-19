import { useRef, useState } from "react";

const SimpleInput = props => {
  const nameInputRef = useRef();

  // Validated every key stroke , and can be reset
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    console.log(enteredName);
    setEnteredName("");

    // Use for one once validation eg. submitting the form
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          // ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
