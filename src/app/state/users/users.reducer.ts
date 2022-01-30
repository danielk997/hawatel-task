import {createReducer, on} from '@ngrx/store';
import {Pagination} from "../../main/pagination";
import {User} from "../../main/users/user.model";
import {loadUsers, loadUsersFailure, loadUsersSuccess, updateUsers} from "./users.actions";

export interface UserState {
  users: User[];
  status: 'pending' | 'loading' | 'error' | 'success';
  pagination: Pagination;
}

export const initialState: UserState = {
  users: [],
  status: 'pending',
  pagination: {page: 0, pages: 0, limit: 0, total: 0}
}

export const usersReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({...state, status: "loading"})),
  on(loadUsersSuccess, (state, {users, pagination}) => ({
    ...state,
    users: users,
    status: "success",
    pagination: pagination
  })),
  on(updateUsers, (state, {pagination}) => ({...state, pagination: pagination})),
  on(loadUsersFailure, (state) => ({...state, status: "error"})),
);
