import {createReducer, on} from '@ngrx/store';
import {Pagination} from "../../main/pagination";
import {TodoItem} from "../../main/todo-items/todo-item.model";
import {loadTodos, loadTodosFailure, loadTodosSuccess, updateTodos} from "./todos.actions";

export interface TodoState {
  todos: TodoItem[];
  status: 'pending' | 'loading' | 'error' | 'success';
  pagination: Pagination;
}

export const initialState: TodoState = {
  todos: [],
  status: 'pending',
  pagination: {page: 0, pages: 0, limit: 0, total: 0}
}

export const todosReducer = createReducer(
  initialState,
  on(loadTodos, (state) => ({...state, status: "loading"})),
  on(loadTodosSuccess, (state, {todos, pagination}) => ({
    ...state,
    todos: todos,
    status: "success",
    pagination: pagination
  })),
  on(updateTodos, (state, {pagination}) => ({...state, pagination: pagination})),
  on(loadTodosFailure, (state) => ({...state, status: "error"})),
);
