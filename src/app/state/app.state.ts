import {PostState} from "./posts/posts.reducer";
import {UserState} from "./users/users.reducer";
import {TodoState} from "./todos/todos.reducer";

export interface AppState {
  posts: PostState;
  users: UserState;
  todos: TodoState;
}
