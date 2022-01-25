import {createFeatureSelector} from '@ngrx/store';
import {Pagination} from "../../main/api-response.model";
import {TodoItem} from "../../main/todo-items/todo-item.model";

export const selectTodos = createFeatureSelector<ReadonlyArray<TodoItem>>('todos');

export const selectTodosPagination = createFeatureSelector<Pagination>('todosPagination');
