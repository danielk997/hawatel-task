import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {Pagination} from "../pagination";
import {Store} from "@ngrx/store";
import {selectAllUsers, selectUsersPagination} from "../../state/users/users.selectors";
import {loadUsers, updateUsers} from "../../state/users/users.actions";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  paginatorData: Pagination = {total: 0, pages: 0, page: 0, limit: 0}
  paginatorData$ = this.store.select(selectUsersPagination)
  dataSource$ = this.store.select(selectAllUsers);
  displayedColumns = ['id', 'name', 'email'];

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.paginatorData$.subscribe(it => this.paginatorData = it)
    const pagination = this.paginatorData
    this.store.dispatch(loadUsers({pagination}))
  }

  onPaginatorChange(event: PageEvent) {
    const pagination = Object.assign({}, this.paginatorData)
    pagination.page = event.pageIndex + 1

    this.store.dispatch(updateUsers({pagination}))
  }
}
