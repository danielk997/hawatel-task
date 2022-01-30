import {Injectable} from '@angular/core';
import {ApiService} from "../api.service";
import {map, Observable} from "rxjs";
import {Post, PostData} from "./post.model";
import {Comment} from "./comment.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private api: ApiService) {
  }

  getByPage(page: number): Observable<PostData> {
    return this.api.getItem('posts', page).pipe(
      map(it => {
        return {posts: it.data, pagination: it.meta.pagination}
      })
    )
  }

  getById(id: number): Observable<Post> {
    return this.api.getItem('posts', 1, `id=${id}`).pipe(
      map(it => it.data[0])
    )
  }

  getComments(id: number): Observable<Comment[]> {
    return this.api.getItem('comments', 1, `post_id=${id}`).pipe(
      map(it => it.data)
    )
  }
}
