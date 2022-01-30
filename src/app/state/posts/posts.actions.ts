import {createAction, props} from '@ngrx/store';
import {Post} from "../../main/posts/post.model";
import {Pagination} from "../../main/api-response.model";

export const loadPosts = createAction(
  '[Posts List/API] Load Posts',
  props<{ pagination: Pagination }>()
);

export const loadPostsSuccess = createAction(
  '[Posts List/API] Load Posts Success',
  props<{ posts: Post[], pagination: Pagination }>()
);

export const loadPostsFailure = createAction('[Posts List/API] Load Posts Failure');

export const updatePosts = createAction(
  '[Posts List/API] Update Posts',
  props<{ pagination: Pagination }>()
);
