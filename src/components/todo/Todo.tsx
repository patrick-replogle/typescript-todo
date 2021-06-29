import { useState } from 'react';

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import { ActionWithPayload } from '../../actions';

import { generateDateStringForTodo } from '../../util/functions';

import './todo.styles.scss';

type TodoProps = {
  id: number;
  completed: boolean;
  date: string;
  details: string;
};

const Todo = ({
  todo,
  dispatch,
  setFormState
}: {
  todo: TodoProps;
  dispatch: React.Dispatch<ActionWithPayload>;
  setFormState: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const { completed, details, date } = todo;
  const [checked, setChecked] = useState(completed);

  const deleteTodo = (): void => {
    dispatch({ type: 'DELETE_TODO', payload: todo });
  };

  const toggleEdit = (): void => {
    dispatch({ type: 'TOGGLE_EDIT', payload: todo });
  };

  const toggleCompleted = (): void => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: todo });
    setChecked((prevState) => !prevState);
    setFormState({ details: '', date: '' });
  };

  return (
    <div className="todoContainer">
      <div className="left">
        <p style={{ textDecoration: checked ? 'line-through' : 'none' }}>
          {details}
        </p>
        <p>{generateDateStringForTodo(date)}</p>
      </div>
      <div className="right">
        <CreateIcon onClick={toggleEdit} className="icon" />
        <DeleteIcon onClick={deleteTodo} className="icon" />
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleCompleted}
          name="checked"
        />
      </div>
    </div>
  );
};

export default Todo;
