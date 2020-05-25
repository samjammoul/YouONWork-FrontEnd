import { Component, OnInit } from '@angular/core';
import {UserHandlerService} from './UserHandler/user-handler.service';
import {Token} from '../Moduls/Token';
import {Router} from '@angular/router';




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


    loginRequest2 = {
        username: 'sam',
        password: 'sam'
    }
  public  token: Token;
    constructor(private userHandler: UserHandlerService, private router: Router) {
    }

  ngOnInit(): void {
      localStorage.setItem('MyToken', '');
      this.token = {token: ''};
      this.userHandler.signIn2().subscribe((data: Token) => {
          this.setToken(data);
          localStorage.setItem('MyToken', data.token);
      }, (error) => {alert('Some thing went wrong'); }
      );

  }
  setToken(data: Token){
        this.token = {
          token: data.token
      };
        this.checkLogIn();
  }
  checkLogIn() {
        if (this.token.token != null) {
            this.router.navigate(['/teams']).then();
        } else {
            this.router.navigate(['/login']).then();
        }
  }
}
