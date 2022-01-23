import {User} from "./users/user.model";
import {TodoItem} from "./todo-items/todo-item.model";
import {Post} from "./posts/post.model";

export interface ApiResponse {
  meta: Meta
  data: User[] | TodoItem[] | Post[]
}

interface Meta {
  pagination: Pagination
}

export interface Pagination {
  total: number
  pages: number
  page: number
  limit: number
}
