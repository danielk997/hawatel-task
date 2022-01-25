import {createReducer, on} from '@ngrx/store';
import {changedPagination, initPostsPagination, retrievedPostsList} from "./posts.actions";
import {Post} from "../../main/posts/post.model";
import {Pagination} from "../../main/api-response.model";

export const initialState: ReadonlyArray<Post> = [];
export let postsInit: boolean = false

export const postsReducer = createReducer(
  initialState,
  on(retrievedPostsList, (state, {posts}) => {
    postsInit = true;
    return posts
  })
);

export const initialPostsPagination: Pagination = {page: 0, pages: 0, limit: 0, total: 0}

export const paginationReducer = createReducer(
  initialPostsPagination,
  on(changedPagination, (state, {pagination}) => pagination),
  on(initPostsPagination, (state, {pagination}) => pagination),
)
