import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiToken: string = '06c0ff214ed9f71b1fe0c94642f782305c9e47dd057ae0710e1a7c1231714205';

  constructor(private http: HttpClient) {
  }

  getItem(item: string, page: number, params?: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${item}?page=${page}${params ? '&' + params : ''}`)
  }

  post(body: Object = {}, path: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body),
      {
        headers: {
          'Authorization': `Bearer ${this.apiToken}`,
          'Content-Type': 'application/json'
        }
      }
    ).pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }
}
