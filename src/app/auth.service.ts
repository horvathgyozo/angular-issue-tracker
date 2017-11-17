import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login() {
    const user = {
      "username": "admin",
      "password": "a",
      "email": "gyozke@alma.hu"
    };
    this.http.post('http://localhost:4200/api/user/login', user, httpOptions).pipe(
      tap(res => console.log(res))
    ).toPromise();
  }

}
