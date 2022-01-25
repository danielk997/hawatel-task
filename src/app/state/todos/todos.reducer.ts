import {createReducer, on} from '@ngrx/store';
import {Pagination} from "../../main/api-response.model";
import {TodoItem} from "../../main/todo-items/todo-item.model";
import {changedPagination, initTodosPagination, retrievedTodosList} from "./todos.actions";

export const initialState: ReadonlyArray<TodoItem> = [];
export let todosInit: boolean = false

export const todosReducer = createReducer(
  initialState,
  on(retrievedTodosList, (state, {todos}) => {
    todosInit = true;
    return todos
  })
);

export const initialTodosPagination: Pagination = {page: 0, pages: 0, limit: 0, total: 0}

export const todoPaginationReducer = createReducer(
  initialTodosPagination,
  on(changedPagination, (state, {todosPagination}) => todosPagination),
  on(initTodosPagination, (state, {todosPagination}) => todosPagination),
)
