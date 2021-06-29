import { TodoType } from '../types';

export type ActionWithPayload = {
  type:
    | 'ADD_TODO'
    | 'DELETE_TODO'
    | 'UPDATE_TODO'
    | 'TOGGLE_EDIT'
    | 'TOGGLE_COMPLETED';
  payload: TodoType;
};

export type ActionWithoutPayload = {
  type: 'CANCEL_EDIT' | 'CLEAR_COMPLETED_TODOS';
};

export type ActionType = ActionWithPayload | ActionWithoutPayload;
