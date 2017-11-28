import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from 'rxjs/operators';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

  user: User;
  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor(
    private http: HttpClient
  ) { }

  login(user: User): Promise<User> {
    return this.http.post<User>('api/user/login', user, httpOptions).pipe(
      tap((res: User) => {
        console.log('service login', res);
        this.isLoggedIn = true;
        this.user = res;
      })
    ).toPromise();
  }

  logout() {
    return this.http.post('api/user/logout', {}, httpOptions).pipe(
      tap(res => {
        console.log('service logout', res);
        this.isLoggedIn = false;
        this.user = new User();
      })
    ).toPromise();
  }
}
