import {createReducer, on} from '@ngrx/store';
import {loadPosts, loadPostsFailure, loadPostsSuccess, updatePosts} from "./posts.actions";
import {Post} from "../../main/posts/post.model";
import {Pagination} from "../../main/pagination";

export interface PostState {
  posts: Post[];
  status: 'pending' | 'loading' | 'error' | 'success';
  pagination: Pagination;
}

export const initialState: PostState = {
  posts: [],
  status: 'pending',
  pagination: {page: 0, pages: 0, limit: 0, total: 0}
}

export const postsReducer = createReducer(
  initialState,
  on(loadPosts, (state) => ({...state, status: "loading"})),
  on(loadPostsSuccess, (state, {posts, pagination}) => ({
    ...state,
    posts: posts,
    status: "success",
    pagination: pagination
  })),
  on(updatePosts, (state, {pagination}) => ({...state, pagination: pagination})),
  on(loadPostsFailure, (state) => ({...state, status: "error"})),
);
