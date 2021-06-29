import { TodoType } from '../types';

import { ActionType } from '../actions';

type TodoState = {
  todos: TodoType[];
  isEditing: boolean;
  todoToEdit: TodoType;
};

export const todoReducer = (
  state: TodoState,
  action: ActionType
): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload.id)
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id === action.payload.id) {
            return action.payload;
          }
          return t;
        }),
        isEditing: false,
        todoToEdit: {} as TodoType
      };
    case 'TOGGLE_EDIT':
      return {
        ...state,
        isEditing: true,
        todoToEdit: action.payload
      };
    case 'CANCEL_EDIT':
      return {
        ...state,
        isEditing: false,
        todoToEdit: {} as TodoType
      };
    case 'TOGGLE_COMPLETED':
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id === action.payload.id) {
            t.completed = !t.completed;
          }
          return t;
        })
      };
    case 'CLEAR_COMPLETED_TODOS':
      return {
        ...state,
        todos: state.todos.filter((t) => !t.completed)
      };
    default:
      return {
        ...state
      };
  }
};
