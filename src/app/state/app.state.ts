import {PostState} from "./posts/posts.reducer";
import {UserState} from "./users/users.reducer";

export interface AppState {
  posts: PostState;
  users: UserState;
}
