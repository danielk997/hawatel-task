import {Component, OnInit} from '@angular/core';
import {User} from "./user.model";
import {PageEvent} from "@angular/material/paginator";
import {ApiService} from "../api.service";
import {Pagination} from "../api-response.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  paginatorData: Pagination = {total: 0, pages: 0, page: 0, limit: 0};
  dataSource: User[] = [];
  displayedColumns = ['id', 'name', 'email'];
  currentPage: number = 1;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getUsers(this.currentPage).subscribe(it => {
      this.paginatorData = it.meta.pagination;
      this.updateDataSource(this.currentPage);
    })
  }

  onPaginatorChange(event: PageEvent) {
    this.updateDataSource(event.pageIndex)
  }

  private updateDataSource(currentPage: number) {
    this.api.getUsers(currentPage + 1).subscribe(it => {
      this.dataSource = it.data as User[];
    })
  }
}
