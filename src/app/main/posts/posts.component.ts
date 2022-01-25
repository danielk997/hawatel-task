import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Post} from "./post.model";
import {Store} from "@ngrx/store";
import {ApiResponse, Pagination} from "../api-response.model";
import {PageEvent} from "@angular/material/paginator";
import {selectPagination, selectPosts} from "../../state/posts/posts.selectors";
import {postsInit} from "../../state/posts/posts.reducer";
import {changedPagination, initPostsPagination, retrievedPostsList} from "../../state/posts/posts.actions";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  paginatorData: Pagination = {total: 0, pages: 0, page: 0, limit: 0}
  paginatorData$ = this.store.select(selectPagination)
  dataSource$ = this.store.select(selectPosts);

  constructor(
    private api: ApiService,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    if (!postsInit) {
      this.api.getPosts(1)
        .subscribe(it => this.initStore(it))
    } else {
      this.paginatorData$.subscribe(it => {
        this.paginatorData = {page: it.page, pages: it.pages, limit: it.limit, total: it.total}
      })
    }
  }

  onPaginatorChange(event: PageEvent) {
    const pagination = Object.assign({}, this.paginatorData)
    pagination.page = event.pageIndex + 1
    this.store.dispatch(changedPagination({pagination}))

    this.updateData()
  }

  private updateData() {
    this.api.getPosts(this.paginatorData.page)
      .subscribe(it => {
        this.initStore(it)
      })
  }

  private initStore(apiResponse: ApiResponse): void {
    this.initPosts(apiResponse.data as Post[])
    this.initPagination(apiResponse.meta.pagination)
  }

  private initPosts(posts: Post[]): void {
    this.store.dispatch(retrievedPostsList({posts}))
  }

  private initPagination(pagination: Pagination): void {
    this.store.dispatch(initPostsPagination({pagination}))
    this.paginatorData$.subscribe(it => this.paginatorData = it)
  }
}
