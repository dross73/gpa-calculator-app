/*
============================================
; Title: Exercise 7.2 - Reactive Forms
; Author: Dan Ross
; Date: 13 Feb 2021
; Modified By: Dan Ross
; Description: This is the sign-in guard file.
;===========================================
*/



import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //Retrieve the cookie from the user's browser.
      const sessionUser = this.cookieService.get('session_user');
      //Verify that there is actually a user logged in.
      if (sessionUser) {
        return true;
      } else {
        //Redirect a user back to the sign-in if they don't have access and return false.
        this.router.navigate(['session/sign-in']);
        return false;
      }

  }

}
