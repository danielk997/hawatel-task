import {Component, OnInit} from '@angular/core';
import {Post} from "../post.model";
import {Comment} from "../comment.model";
import {ApiService} from "../../api.service";
import {ActivatedRoute} from "@angular/router";

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
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(it => {
      const postId = this.postIdFromUrlArray(it);
      this.api.getPostComments(1, postId)
        .subscribe(res => this.comments = res.data)
    })
  }

  private postIdFromUrlArray(urlArray: any[]) {
    return urlArray[urlArray.length - 1].path
  }
}
