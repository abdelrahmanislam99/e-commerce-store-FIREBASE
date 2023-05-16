import { Component, OnInit } from '@angular/core';
import AuthService from './Services/authentication.service';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-commerce-store';
  isOpen: boolean = false
 isUser: boolean = false
 isAdmin: boolean = false
 constructor(private as: AuthService, private us: UserService) { }
 ngOnInit() {
  this.as.user.subscribe(user => {
  if (user) {
  this.isUser = true
  this.as.userId = user.uid
  this.us.getUserData().subscribe((data: { [x: string]: any} | any) => {
  if (data['admin']) this.isAdmin = true;
  })
  }
  else {
  this.isUser = false
  this.as.userId = ''
  }
  })
  }
  toggleNavbar() {
  this.isOpen = !this.isOpen
  }
  logout() {
  this.as.logout()
  }
}
