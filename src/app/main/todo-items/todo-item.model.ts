import {Pagination} from "../pagination";

export interface TodoItem {
  id: number;
  user_id: number;
  title: string;
  due_on: string;
}

export interface TodoItemData {
  todos: TodoItem[];
  pagination: Pagination;
}
