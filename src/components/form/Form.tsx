import { useState, Dispatch, ChangeEvent, FormEvent, useEffect } from "react";

import { TodoType } from "../../types";

import { ActionType } from "../../actions";

import { generateTodayDateString } from "../../util/functions";

import "./form.styles.scss";

type TodoProps = {
  todos: TodoType[];
  isEditing: boolean;
  todoToEdit: TodoType;
};

const intialFormState = {
  details: "",
  date: ""
};

const Form = ({
  state,
  dispatch
}: {
  state: TodoProps;
  dispatch: Dispatch<ActionType>;
}) => {
  const [formState, setFormState] = useState(intialFormState);
  const today: string = generateTodayDateString();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const { details, date } = formState;

    if (details.length && date.length) {
      if (Object.keys(state).length > 0 && !state.isEditing) {
        const newTodo: TodoType = {
          ...formState,
          id: Date.now(),
          completed: false
        };
        dispatch({ type: "ADD_TODO", payload: newTodo });
        setFormState(intialFormState);
      } else {
        const { todoToEdit } = state;
        const updatedTodo: TodoType = {
          ...formState,
          id: todoToEdit.id,
          completed: todoToEdit.completed
        };
        dispatch({ type: "UPDATE_TODO", payload: updatedTodo });
        setFormState(intialFormState);
      }
    }
  };

  const cancel = () => {
    dispatch({ type: "CANCEL_EDIT" });
    setFormState(intialFormState);
  };

  const clearCompletedTodos = () => {
    dispatch({ type: "CLEAR_COMPLETED_TODOS" });
  };

  useEffect(() => {
    if (state.isEditing) {
      const { todoToEdit } = state;
      setFormState({
        details: todoToEdit.details,
        date: todoToEdit.date
      });
    }
  }, [state]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="details"
        value={formState.details}
        placeholder="add a todo"
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={formState.date}
        onChange={handleChange}
        min={today}
      />
      <button type="submit">Submit</button>
      <button onClick={cancel}>Cancel</button>
      <button onClick={clearCompletedTodos}>Clear Completed Tasks</button>
    </form>
  );
};

export default Form;