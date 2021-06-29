import { useState } from 'react';

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import { ActionWithPayload } from '../../actions';

import './todo.styles.scss';

type TodoProps = {
  id: number;
  completed: boolean;
  date: string;
  details: string;
};

const Todo = ({
  todo,
  dispatch
}: {
  todo: TodoProps;
  dispatch: React.Dispatch<ActionWithPayload>;
}) => {
  const { completed, details, date } = todo;
  const [checked, setChecked] = useState<boolean>(completed);

  const deleteTodo = (): void => {
    dispatch({ type: 'DELETE_TODO', payload: todo });
  };

  const toggleEdit = (): void => {
    dispatch({ type: 'TOGGLE_EDIT', payload: todo });
  };

  const toggleCompleted = () => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: todo });
    setChecked((prevState) => !prevState);
  };

  return (
    <div className="todoContainer">
      <div>
        <p style={{ textDecoration: checked ? 'line-through' : 'none' }}>
          {details}
        </p>
        <p>{date}</p>
      </div>
      <div className="iconContainer">
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
