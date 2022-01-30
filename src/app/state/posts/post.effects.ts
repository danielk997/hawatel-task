import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {loadPosts, loadPostsFailure, loadPostsSuccess, updatePosts} from "./posts.actions";
import {catchError, from, map, of, switchMap, tap} from "rxjs";
import {PostService} from "../../main/posts/post.service";

@Injectable()
export class PostEffects {

  constructor(
    private actions$: Actions,
    private store: Store,
    private postService: PostService
  ) {
  }

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      switchMap((action) =>
        from(this.postService.getByPage(action.pagination.page)).pipe(
          map((data) => loadPostsSuccess({posts: data.posts, pagination: data.pagination})),
          catchError(_ => of(loadPostsFailure()))
        )
      ),
    ));

  updatePosts$ = createEffect(() =>
      this.actions$.pipe(
        ofType(updatePosts),
        tap((action) => {
            const pagination = action.pagination
            this.store.dispatch(loadPosts({pagination}))
          }
        ),
      ),
    {dispatch: false}
  )
}
