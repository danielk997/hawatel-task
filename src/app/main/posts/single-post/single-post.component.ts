import {Component, OnInit} from '@angular/core';
import {Post} from "../post.model";
import {Comment} from "../comment.model";
import {ApiService} from "../../api.service";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../post.service";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.sass']
})
export class SinglePostComponent implements OnInit {

  post: Post | undefined
  comments: Comment[] = []

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private postService: PostService
  ) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(it => {
      const postId = this.postIdFromUrlArray(it);
      this.postService.getComments(postId).subscribe(it => this.comments = it)
      this.postService.getById(postId).subscribe(it => this.post = it)
    })
  }

  private postIdFromUrlArray(urlArray: any[]) {
    return urlArray[urlArray.length - 1].path
  }
}
