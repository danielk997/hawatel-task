import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Store} from "@ngrx/store";
import {Pagination} from "../api-response.model";
import {PageEvent} from "@angular/material/paginator";
import {selectAllPosts, selectPagination} from "../../state/posts/posts.selectors";
import {loadPosts, updatePosts} from "../../state/posts/posts.actions";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  dataSource$ = this.store.select(selectAllPosts)
  paginatorData: Pagination = {total: 0, pages: 0, page: 0, limit: 0}
  paginatorData$ = this.store.select(selectPagination)

  constructor(
    private api: ApiService,
    private store: Store<any>,
  ) {
  }

  ngOnInit(): void {
    this.paginatorData$.subscribe(it => this.paginatorData = it)
    const pagination = this.paginatorData
    this.store.dispatch(loadPosts({pagination}))
  }

  onPaginatorChange(event: PageEvent) {
    const pagination = Object.assign({}, this.paginatorData)
    pagination.page = event.pageIndex + 1

    this.store.dispatch(updatePosts({pagination}))
  }
}
