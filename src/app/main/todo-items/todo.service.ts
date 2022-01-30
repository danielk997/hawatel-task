import {Injectable} from '@angular/core';
import {ApiService} from "../api.service";
import {map, Observable} from "rxjs";
import {TodoItemData} from "./todo-item.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private api: ApiService) {
  }

  geyByPage(page: number): Observable<TodoItemData> {
    return this.api.getItem('todos', page).pipe(
      map(it => ({todos: it.data, pagination: it.meta.pagination}))
    )
  }

  add(body: Object = {}): Observable<any> {
    return this.api.post(body, 'todos')
  }
}
