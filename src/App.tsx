import { useReducer, useEffect } from 'react';

import TodoList from './components/todo-list/TodoList';
import Form from './components/form/Form';

import { todoReducer } from './reducers/todoReducer';
import { initInitialState } from './util/functions';

import './app.styles.scss';

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initInitialState());

  useEffect((): void => {
    if (state) {
      localStorage.setItem('todos', JSON.stringify(state.todos));
    }
  }, [state]);

  return (
    <div className="App">
      <Form state={state} dispatch={dispatch} />
      <TodoList todos={state.todos} dispatch={dispatch} />
    </div>
  );
};

export default App;
