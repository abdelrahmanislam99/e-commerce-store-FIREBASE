import {FormControl, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AuthService from 'src/app/Services/authentication.service';

/** @title Form field with error messages */
@Component({
  selector: 'form-field-error-example',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class FormFieldErrorExample {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  loginError: string = ''

  constructor(private as: AuthService, private router: Router){}

  login(form: { value: any; }) {
    let data = form.value
    this.as.login(data.email, data.password)
    .then(() => this.router.navigate(['/']))
    .catch((err: { message: string; }) => this.loginError = err.message)
    }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
