import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {ApiResponse, Pagination} from "../api-response.model";
import {ApiService} from "../api.service";
import {Store} from "@ngrx/store";
import {selectTodos, selectTodosPagination} from "../../state/todos/todos.selectors";
import {todosInit} from "../../state/todos/todos.reducer";
import {TodoItem} from "./todo-item.model";
import {changedPagination, initTodosPagination, retrievedTodosList} from "../../state/todos/todos.actions";

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.sass']
})
export class TodoItemsComponent implements OnInit {

  paginatorData: Pagination = {total: 0, pages: 0, page: 0, limit: 0};
  paginatorData$ = this.store.select(selectTodosPagination)
  dataSource$ = this.store.select(selectTodos);
  displayedColumns = ['id', 'title', 'due_on'];

  constructor(
    private api: ApiService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    if (!todosInit) {
      this.api.getTodos(1)
        .subscribe(it => this.initStore(it))
    } else {
      this.paginatorData$.subscribe(it => {
        this.paginatorData = {page: it.page, pages: it.pages, limit: it.limit, total: it.total}
      })
    }
  }

  onPaginatorChange(event: PageEvent) {
    const todosPagination = Object.assign({}, this.paginatorData)
    todosPagination.page = event.pageIndex + 1
    this.store.dispatch(changedPagination({todosPagination}))

    this.updateData()
  }

  private updateData() {
    this.api.getTodos(this.paginatorData.page)
      .subscribe(it => {
        this.initStore(it)
      })
  }

  private initStore(apiResponse: ApiResponse): void {
    this.initTodos(apiResponse.data as TodoItem[])
    this.initPagination(apiResponse.meta.pagination)
  }

  private initTodos(todos: TodoItem[]): void {
    this.store.dispatch(retrievedTodosList({todos}))
  }

  private initPagination(todosPagination: Pagination): void {
    this.store.dispatch(initTodosPagination({todosPagination}))
    this.paginatorData$.subscribe(it => this.paginatorData = it)
  }
}
