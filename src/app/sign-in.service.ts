/*
============================================
; Title: Exercise 7.2 - Reactive Forms
; Author: Dan Ross
; Date: 13 Feb 2021
; Modified By: Dan Ross
; Description: This is the sign-in service.
;===========================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  studentIds: Array<number>;

  constructor() {
    //Populate the studentIds array here.
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }
  validate(studentId: number) {
    //Return true if we find a matching entry inside our studentIds array.
    return this.studentIds.some(id => id === studentId);
  }
}
