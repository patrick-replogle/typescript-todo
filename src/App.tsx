import { useReducer } from 'react';

import TodoList from './components/todo-list/TodoList';
import Form from './components/form/Form';

import { todoReducer } from './reducers/todoReducer';
import { TodoType } from './types';

import './app.styles.scss';

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    isEditing: false,
    todoToEdit: {} as TodoType
  });

  return (
    <div className="App">
      <Form state={state} dispatch={dispatch} />
      <TodoList todos={state.todos} dispatch={dispatch} />
    </div>
  );
};

export default App;
