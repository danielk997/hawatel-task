import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {catchError, from, map, of, switchMap, tap} from "rxjs";
import {loadTodos, loadTodosFailure, loadTodosSuccess, updateTodos} from "./todos.actions";
import {TodoService} from "../../main/todo-items/todo.service";

@Injectable()
export class TodosEffects {

  constructor(
    private actions$: Actions,
    private store: Store,
    private todoService: TodoService
  ) {
  }

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap((action) =>
        from(this.todoService.geyByPage(action.pagination.page)).pipe(
          map((data) => loadTodosSuccess({todos: data.todos, pagination: data.pagination})),
          catchError(_ => of(loadTodosFailure()))
        )
      ),
    ));

  updateUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(updateTodos),
        tap((action) => {
            const pagination = action.pagination
            this.store.dispatch(loadTodos({pagination}))
          }
        ),
      ),
    {dispatch: false}
  )
}
