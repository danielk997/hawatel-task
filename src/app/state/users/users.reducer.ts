import {createReducer, on} from '@ngrx/store';
import {Pagination} from "../../main/api-response.model";
import {TodoItem} from "../../main/todo-items/todo-item.model";
import {User} from "../../main/users/user.model";
import {changedPagination, initUsersPagination, retrievedUsersList} from "./users.actions";

export const initialState: ReadonlyArray<User> = [];
export let usersInit: boolean = false

export const usersReducer = createReducer(
  initialState,
  on(retrievedUsersList, (state, {users}) => {
    usersInit = true;
    return users
  })
);

export const initialUsersPagination: Pagination = {page: 0, pages: 0, limit: 0, total: 0}

export const userPaginationReducer = createReducer(
  initialUsersPagination,
  on(changedPagination, (state, {usersPagination}) => usersPagination),
  on(initUsersPagination, (state, {usersPagination}) => usersPagination),
)
