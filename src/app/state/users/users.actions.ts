import {createAction, props} from '@ngrx/store';
import {User} from "../../main/users/user.model";
import {Pagination} from "../../main/api-response.model";

export const loadUsers = createAction(
  '[Users List/API] Load Users',
  props<{ pagination: Pagination }>()
);

export const loadUsersSuccess = createAction(
  '[Users List/API] Load Users Success',
  props<{ users: User[], pagination: Pagination }>()
);

export const loadUsersFailure = createAction('[Users List/API] Load Users Failure');

export const updateUsers = createAction(
  '[Users List/API] Update Users',
  props<{ pagination: Pagination }>()
);
