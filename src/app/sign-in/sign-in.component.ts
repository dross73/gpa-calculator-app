/*
============================================
; Title: Exercise 7.3 - Form Validation
; Author: Dan Ross
; Date: 13 Feb 2021
; Modified By: Dan Ross
; Description: This is the sign-in component.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }

  ngOnInit(): void {
    //Create new form.
    this.signInForm = this.fb.group({
      //Validate the form.
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }
  //This is a helper function to return the forms controls so that we can apply client-side validation in a predictable way.
  get form() { return this.signInForm.controls; }

  onSubmit() {
    //Capture the form values.
    const formValues = this.signInForm.value;
    //This variable will hold the studentId value.
    const studentId = parseInt(formValues.studentId);
    //Call the sign in service and make sure the student Id from the form is valid.
    if (this.signinService.validate(studentId)) {
      //Set the browser cookie if valid.
      this.cookieService.set('session_user', studentId.toString(), 1);
      //Route to home screen
      this.router.navigate(['/']);
    } else {
      //If the id passed is not valid show error message
      this.errorMessage = 'The student ID you entered is invalid, please try again.';

    }
  }
}
