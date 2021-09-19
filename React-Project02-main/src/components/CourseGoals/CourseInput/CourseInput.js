import React, { useState } from "react";
import { isValidElement } from "react";
//import styled from "styled-components";
import styles from "./CourseInput.module.css";

import Button from "../../UI/Button/Button";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => (props.invalid ? "red" : "black")}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => (props.invalid ? "red" : "#ccc")};
//     background: ${props => (props.invalid ? "red" : "transparent")}
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     border-radius: 6px;
//   }

//   & input:focus {
//     outline: none;
//     background: #ffffff00;
//     border-color: #ffc1c1;
//   }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  /* <FormControl invalid={!isValid}> */
  // </FormControl>
  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input
          type='text'
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>

      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;