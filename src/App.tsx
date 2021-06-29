import { useReducer } from "react";

import Todo from "./components/todo/Todo";
import Form from "./components/form/Form";

import { todoReducer } from "./reducers/todoReducer";
import { TodoType } from "./types";

import "./app.styles.scss";

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    isEditing: false,
    todoToEdit: {} as TodoType
  });

  return (
    <div className="App">
      <Form state={state} dispatch={dispatch} />
      {state.todos &&
        state.todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} dispatch={dispatch} />;
        })}
    </div>
  );
};

export default App;
