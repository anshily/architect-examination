import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

    checkAdmin() {
      if (localStorage.getItem('user_category') && localStorage.getItem('user_category') == '1') {
        return true;
      } else {
        return false;
      }
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // console.log('AuthGuard#canActivate called');
        return this.checkAdmin();
    }
}
