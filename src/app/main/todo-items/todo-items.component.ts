import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {Pagination} from "../pagination";
import {Store} from "@ngrx/store";
import {selectAllTodos, selectTodosPagination} from "../../state/todos/todos.selectors";
import {loadTodos, updateTodos} from "../../state/todos/todos.actions";

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.sass']
})
export class TodoItemsComponent implements OnInit {

  paginatorData: Pagination = {total: 0, pages: 0, page: 0, limit: 0};
  paginatorData$ = this.store.select(selectTodosPagination)
  dataSource$ = this.store.select(selectAllTodos);
  displayedColumns = ['id', 'title', 'due_on'];

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.paginatorData$.subscribe(it => this.paginatorData = it)
    const pagination = this.paginatorData
    this.store.dispatch(loadTodos({pagination}))
  }

  onPaginatorChange(event: PageEvent) {
    const pagination = Object.assign({}, this.paginatorData)
    pagination.page = event.pageIndex + 1

    this.store.dispatch(updateTodos({pagination}))
  }
}
