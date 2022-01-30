import {createSelector} from '@ngrx/store';
import {AppState} from "../app.state";
import {PostState} from "./posts.reducer";

// export const selectPosts = createFeatureSelector<ReadonlyArray<Post>>('posts');
export const selectPosts = (state: AppState) => state.posts;
export const selectAllPosts = createSelector(
  selectPosts,
  (state: PostState) => state.posts
);
export const selectPagination = createSelector(
  selectPosts,
  (state: PostState) => state.pagination
)

// export const selectPagination = createFeatureSelector<Pagination>('pagination');
