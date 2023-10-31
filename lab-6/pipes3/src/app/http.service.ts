import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('assets/users.json') as Observable<
      Record<string, string>[]
    >;
  }
}
