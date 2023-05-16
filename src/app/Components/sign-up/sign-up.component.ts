import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Interfaces/user';
import AuthService from 'src/app/Services/authentication.service';
import { UserService } from '../../Services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  errorMessage: string = '';
  constructor(
    private as: AuthService,
    private us: UserService,
    private router: Router
  ) {}
  ngOnInit() {}
  signup(form: { value: User }) {
    let data: User = form.value;
    this.as
      .signup(data.email, data.password)
      .then((reault: { user: { uid: any } }) => {
        this.errorMessage = '';
        this.us
          .addNewUser(reault.user.uid, data.name, data.address)
          .then(() => {
            this.router.navigate(['/']);
          });
      })
      .catch((err: { message: string }) => {
        this.errorMessage = err.message;
      });
  }
}
