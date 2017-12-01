import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.isLoggedIn) {
      if (next.data.roles && next.data.roles.includes(this.authService.user.role)) {
        return true;
      } else {
        // this.router.navigate(['/login']);
        console.log('No permission');
        return false;
      }
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = state.url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
