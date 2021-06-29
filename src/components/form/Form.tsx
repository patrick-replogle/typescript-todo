import { Dispatch, ChangeEvent, FormEvent, useEffect } from 'react';

import { TodoType } from '../../types';

import { ActionType } from '../../actions';

import { generateTodayDateString } from '../../util/functions';

import './form.styles.scss';

type TodoProps = {
  todos: TodoType[];
  isEditing: boolean;
  todoToEdit: TodoType;
};

type FormProps = {
  details: string;
  date: string;
};

const intialFormState = {
  details: '',
  date: ''
};

const Form = ({
  state,
  dispatch,
  formState,
  setFormState
}: {
  state: TodoProps;
  dispatch: Dispatch<ActionType>;
  formState: FormProps;
  setFormState: Dispatch<React.SetStateAction<any>>;
}) => {
  const today: string = generateTodayDateString();
  const { isEditing, todoToEdit } = state;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (formState.details.length && formState.date.length) {
      const todo = {
        ...formState,
        id: isEditing ? todoToEdit.id : Date.now(),
        completed: isEditing ? todoToEdit.completed : false
      };

      if (!isEditing) {
        dispatch({ type: 'ADD_TODO', payload: todo });
        setFormState(intialFormState);
      } else {
        dispatch({ type: 'UPDATE_TODO', payload: todo });
        setFormState(intialFormState);
      }
    }
  };

  const cancel = (): void => {
    dispatch({ type: 'CANCEL_EDIT' });
    setFormState(intialFormState);
  };

  const clearCompletedTodos = (): void => {
    dispatch({ type: 'CLEAR_COMPLETED_TODOS' });
    setFormState(intialFormState);
  };

  useEffect((): void => {
    if (isEditing) {
      setFormState({
        details: todoToEdit.details,
        date: todoToEdit.date
      });
    }
  }, [state, isEditing, todoToEdit, setFormState]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputContainer">
        <div>
          <label>
            Details
            <input
              type="text"
              name="details"
              value={formState.details}
              placeholder="...add a todo"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Due Date
            <input
              type="date"
              name="date"
              value={formState.date}
              onChange={handleChange}
              min={today}
              className="date"
            />
          </label>
        </div>
      </div>

      <div className="btnContainer">
        <button type="submit">Submit</button>
        <button onClick={cancel}>Cancel</button>
        <button onClick={clearCompletedTodos}>Clear Completed Tasks</button>
      </div>
    </form>
  );
};

export default Form;
