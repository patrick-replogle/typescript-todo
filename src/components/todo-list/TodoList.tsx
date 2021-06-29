import { Dispatch } from 'react';

import { TodoType } from '../../types';

import { ActionType } from '../../actions';

import Todo from '../todo/Todo';

import './todo-list.styles.scss';

type TodoListProps = {
  todos: TodoType[];
  dispatch: Dispatch<ActionType>;
  setFormState: Dispatch<React.SetStateAction<any>>;
};

const TodoList = ({ todos, dispatch, setFormState }: TodoListProps) => {
  return (
    <div className="container">
      {todos.length > 0 &&
        todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              dispatch={dispatch}
              setFormState={setFormState}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
