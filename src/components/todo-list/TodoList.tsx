import { Dispatch } from 'react';

import { TodoType } from '../../types';

import { ActionType } from '../../actions';

import Todo from '../todo/Todo';

type TodoListProps = {
  todos: TodoType[];
  dispatch: Dispatch<ActionType>;
};

const TodoList = ({ todos, dispatch }: TodoListProps) => {
  return (
    <div>
      {todos.length &&
        todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} dispatch={dispatch} />;
        })}
    </div>
  );
};

export default TodoList;
