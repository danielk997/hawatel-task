import {createAction, props} from '@ngrx/store';
import {Pagination} from "../../main/api-response.model";
import {TodoItem} from "../../main/todo-items/todo-item.model";

export const retrievedTodosList = createAction(
  '[Todos List/API] Retrieve Todos Success',
  props<{ todos: ReadonlyArray<TodoItem> }>()
);

export const changedPagination = createAction(
  '[Todos Pagination] Change Todo pagination',
  props<{ todosPagination: Pagination }>()
)

export const initTodosPagination = createAction(
  '[Todos Pagination] Init Todo pagination',
  props<{ todosPagination: Pagination }>()
)
