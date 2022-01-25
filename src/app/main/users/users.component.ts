import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {ApiService} from "../api.service";
import {ApiResponse, Pagination} from "../api-response.model";
import {Store} from "@ngrx/store";
import {selectUsers, selectUsersPagination} from "../../state/users/users.selectors";
import {changedPagination, initUsersPagination, retrievedUsersList} from "../../state/users/users.actions";
import {User} from "./user.model";
import {usersInit} from "../../state/users/users.reducer";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  paginatorData: Pagination = {total: 0, pages: 0, page: 0, limit: 0}
  paginatorData$ = this.store.select(selectUsersPagination)
  dataSource$ = this.store.select(selectUsers);
  displayedColumns = ['id', 'name', 'email'];

  constructor(
    private api: ApiService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    if (!usersInit) {
      this.api.getUsers(1)
        .subscribe(it => this.initStore(it))
    } else {
      this.paginatorData$.subscribe(it => {
        this.paginatorData = {page: it.page, pages: it.pages, limit: it.limit, total: it.total}
      })
    }
  }

  onPaginatorChange(event: PageEvent) {
    const usersPagination = Object.assign({}, this.paginatorData)
    usersPagination.page = event.pageIndex + 1
    this.store.dispatch(changedPagination({usersPagination}))

    this.updateData()
  }

  private updateData() {
    this.api.getUsers(this.paginatorData.page)
      .subscribe(it => {
        this.initStore(it)
      })
  }

  private initStore(apiResponse: ApiResponse): void {
    this.initUsers(apiResponse.data as User[])
    this.initPagination(apiResponse.meta.pagination)
  }

  private initUsers(users: User[]): void {
    this.store.dispatch(retrievedUsersList({users}))
  }

  private initPagination(usersPagination: Pagination): void {
    this.store.dispatch(initUsersPagination({usersPagination}))
    this.paginatorData$.subscribe(it => this.paginatorData = it)
  }
}
