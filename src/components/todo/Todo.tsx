import { ActionWithPayload } from '../../actions';

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
  const deleteTodo = () => {
    dispatch({ type: 'DELETE_TODO', payload: todo });
  };

  const toggleEdit = () => {
    dispatch({ type: 'TOGGLE_EDIT', payload: todo });
  };

  const toggleCompleted = () => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: todo });
  };

  return (
    <div>
      <p>{todo.date}</p>
      <p style={{ textDecoration: todo.completed ? 'underline' : 'none' }}>
        {todo.details}
      </p>
      <p>{String(todo.completed)}</p>
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={toggleCompleted}>Mark as Completed</button>
    </div>
  );
};

export default Todo;
