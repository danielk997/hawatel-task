import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {catchError, from, map, of, switchMap, tap} from "rxjs";
import {loadUsers, loadUsersFailure, loadUsersSuccess, updateUsers} from "./users.actions";
import {UserService} from "../../main/users/user.service";

@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private store: Store,
    private userService: UserService
  ) {
  }

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap((action) =>
        from(this.userService.getByPage(action.pagination.page)).pipe(
          map((data) => loadUsersSuccess({users: data.users, pagination: data.pagination})),
          catchError(_ => of(loadUsersFailure()))
        )
      ),
    ));

  updateUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(updateUsers),
        tap((action) => {
            const pagination = action.pagination
            this.store.dispatch(loadUsers({pagination}))
          }
        ),
      ),
    {dispatch: false}
  )
}
