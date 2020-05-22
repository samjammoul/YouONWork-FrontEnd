import { Component, OnInit } from '@angular/core';
import {UserHandlerService} from './UserHandler/user-handler.service';

import {Login} from '../Moduls/Login';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginRequest = {
  email: '',
  password: ''
};

loginRequest2 = new Login();
    constructor(private userHandler: UserHandlerService ) {
  }

  ngOnInit(): void {
      this.test();
  }

  login(loginForm: NgForm) {

}
test() {
    this.loginRequest2 = {
        username: 'sam',
        password: 'sam'
    }
    this.userHandler.snigIn(this.loginRequest2);
}
}
