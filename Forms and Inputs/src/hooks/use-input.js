import { useState } from "react";

////Use Reducer Method
// import { useReducer } from "react";
// const initialInputState = {
//   value: "",
//   isTouched: false,
// };

// const inputStateReducer = (state, action) => {
//   if (action.type === "INPUT") {
//     return { value: action.value, isTouched: state.isTouched };
//   }
//   if (action.type === "BLUR") {
//     return { isTouched: true, value: state.value };
//   }
//   if (action.type === "RESET") {
//     return { isTouched: false, value: "" };
//   }

//   return initialInputState;
// };

// const useInput = validateValue => {
//   const [inputState, dispatch] = useReducer(
//     inputStateReducer,
//     initialInputState
//   );

// useState Method
const useInput = validateValue => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = event => {
    // dispatch({ type: "INPUT", value: event.target.value });
    setEnteredValue(event.target.value);
  };
  const inputBlurHandler = event => {
    //dispatch({ type: "BLUR" });
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
    // dispatch({ type: "RESET" });
  };

  return {
    value: enteredValue,
    //value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
