import {createAction, props} from '@ngrx/store';
import {Pagination} from "../../main/pagination";
import {TodoItem} from "../../main/todo-items/todo-item.model";

export const loadTodos = createAction(
  '[Todos List/API] Load Todos',
  props<{ pagination: Pagination }>()
);

export const loadTodosSuccess = createAction(
  '[Todos List/API] Load Todos Success',
  props<{ todos: TodoItem[], pagination: Pagination }>()
);

export const loadTodosFailure = createAction('[Todos List/API] Load Todos Failure');

export const updateTodos = createAction(
  '[Todos List/API] Update Todos',
  props<{ pagination: Pagination }>()
);
