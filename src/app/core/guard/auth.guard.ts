import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendService, User } from '../services/backend.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private beService : BackendService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      let user : User = {}
      user.firstName = this.beService.getData('firstName')
      user.lastName = this.beService.getData('lastName')
      user.username = this.beService.getData('username')
      user.phone = this.beService.getData('phone')
      this.beService.user = user;
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false
  }

}
