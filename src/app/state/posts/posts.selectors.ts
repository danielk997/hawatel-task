import {createFeatureSelector} from '@ngrx/store';
import {Post} from "../../main/posts/post.model";
import {Pagination} from "../../main/api-response.model";

export const selectPosts = createFeatureSelector<ReadonlyArray<Post>>('posts');

export const selectPagination = createFeatureSelector<Pagination>('pagination');
