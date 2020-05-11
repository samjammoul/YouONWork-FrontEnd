import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginRequest = {
  email: '',
  password: ''
}
  constructor() {
  }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
}
}
