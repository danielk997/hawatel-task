import {createSelector} from '@ngrx/store';
import {AppState} from "../app.state";
import {UserState} from "./users.reducer";

export const selectUsers = (state: AppState) => state.users;
export const selectAllUsers = createSelector(
  selectUsers,
  (state: UserState) => state.users
);
export const selectUsersPagination = createSelector(
  selectUsers,
  (state: UserState) => state.pagination
)
