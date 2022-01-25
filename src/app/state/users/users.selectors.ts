import {createFeatureSelector} from '@ngrx/store';
import {Pagination} from "../../main/api-response.model";
import {User} from "../../main/users/user.model";

export const selectUsers = createFeatureSelector<ReadonlyArray<User>>('users');

export const selectUsersPagination = createFeatureSelector<Pagination>('usersPagination');
