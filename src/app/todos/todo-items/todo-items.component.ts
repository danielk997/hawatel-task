import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {TodoItem} from "./todo-item.model";
import {Pagination} from "../api-response.model";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.sass']
})
export class TodoItemsComponent implements OnInit {

  paginatorData: Pagination = {total: 0, pages: 0, page: 0, limit: 0};
  dataSource: TodoItem[] = [];
  displayedColumns = ['id', 'title', 'due_on'];
  currentPage: number = 1;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getTodos(this.currentPage).subscribe(it => {
      this.paginatorData = it.meta.pagination
      this.updateDataSource(this.currentPage)
    })
  }

  onPaginatorChange(event: PageEvent) {
    this.updateDataSource(event.pageIndex)
  }

  private updateDataSource(currentPage: number) {
    this.api.getTodos(currentPage + 1).subscribe(it => {
      this.dataSource = it.data as TodoItem[];
    })
  }
}
