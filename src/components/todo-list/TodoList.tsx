import { Dispatch } from 'react';

import { TodoType } from '../../types';

import { ActionType } from '../../actions';

import Todo from '../todo/Todo';

import './todo-list.styles.scss';

type TodoListProps = {
  todos: TodoType[];
  dispatch: Dispatch<ActionType>;
};

const TodoList = ({ todos, dispatch }: TodoListProps) => {
  return (
    <div className="container">
      {todos.length > 0 &&
        todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} dispatch={dispatch} />;
        })}
    </div>
  );
};

export default TodoList;
