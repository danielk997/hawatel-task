import {Injectable} from '@angular/core';
import {ApiService} from "../api.service";
import {map, Observable} from "rxjs";
import {User, UserData} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) {
  }

  getByPage(page: number): Observable<UserData> {
    return this.api.getItem('users', page).pipe(
      map(it => ({users: it.data, pagination: it.meta.pagination}))
    )
  }

  getByName(page: number, name: string): Observable<User[]> {
    return this.api.getItem('users', page, `name=${name}`).pipe(
      map(it => it.data)
    )
  }

  add(body: Object = {}): Observable<any> {
    return this.api.post(body, 'users')
  }
}
