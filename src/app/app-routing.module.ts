/*
============================================
; Title: Exercise 7.3 - Form Validation
; Author: Dan Ross
; Date: 13 Feb 2021
; Modified By: Dan Ross
; Description: This is the app-routing module
;===========================================
*/
//These are our imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from  './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

//These are routes which will load the corresponding component based on the URL path.
const routes: Routes = [

  {
    path: '',
    component: BaseLayoutComponent,
    //These are child routes for the BaseLayoutComponent
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ],
    //Force users to sign in.
    canActivate: [SignInGuard]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    //These are child routes for the AuthLayoutComponent.
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      }
    ]
  },
  {
    //If an invalid URL is entered, this will redirect them to the not-found component.
    path: '**',
    redirectTo: 'session/not-found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
