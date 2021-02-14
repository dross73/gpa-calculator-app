/*
============================================
; Title: Exercise 7.3 - Form Validation
; Author: Dan Ross
; Date: 13 Feb 2021
; Modified By: Dan Ross
; Description: This is the gpa component.
;===========================================
*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {
  //This declares the input property to receive the gpa total. This will be calculated based on the user input (gpa / number of transcript entires).
  @Input() gpaTotal: number;
  constructor() { }

  ngOnInit(): void {
  }

}
