import {createAction, props} from '@ngrx/store';
import {User} from "../../main/users/user.model";
import {Pagination} from "../../main/api-response.model";

export const retrievedUsersList = createAction(
  '[Users List/API] Retrieve Users Success',
  props<{ users: ReadonlyArray<User> }>()
);

export const changedPagination = createAction(
  '[Users Pagination] Change Todo pagination',
  props<{ usersPagination: Pagination }>()
)

export const initUsersPagination = createAction(
  '[Users Pagination] Init Todo pagination',
  props<{ usersPagination: Pagination }>()
)
