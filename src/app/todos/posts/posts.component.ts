import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Post} from "./post.model";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  dataSource: Post[] = [];
  comments: Comment[] = []

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.updateDataSource(1)
  }

  private updateDataSource(currentPage: number) {
    this.api.getPosts(currentPage + 1).subscribe(it => {
      this.dataSource = it.data as Post[];
    })
  }
}
