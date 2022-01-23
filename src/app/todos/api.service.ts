import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ApiResponse} from "./api-response.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getUsers(page: number): Observable<ApiResponse> {
    return this.getItem('users', page);
  }

  getTodos(page: number): Observable<ApiResponse> {
    return this.getItem('todos', page);
  }

  getPosts(page: number): Observable<ApiResponse> {
    return this.getItem('posts', page);
  }

  getPostComments(page: number, postId: number) {
    return this.getItem('comments', page, `post_id=${postId}`)
  }

  private getItem(item: string, page: number, params?: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${item}?page=${page}${params ? '&' + params : ''}`)
  }
}
