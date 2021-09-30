import { useRef } from "react";
import Todo from "../models/todo";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = props => {
  const todoTextInputaRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputaRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={todoTextInputaRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
