import {createAction, props} from '@ngrx/store';
import {Post} from "../../main/posts/post.model";
import {Pagination} from "../../main/api-response.model";

export const retrievedPostsList = createAction(
  '[Posts List/API] Retrieve Posts Success',
  props<{ posts: ReadonlyArray<Post> }>()
);

export const changedPagination = createAction(
  '[Posts Pagination] Change Post pagination',
  props<{ pagination: Pagination }>()
)

export const initPostsPagination = createAction(
  '[Posts Pagination] Init Post pagination',
  props<{ pagination: Pagination }>()
)
