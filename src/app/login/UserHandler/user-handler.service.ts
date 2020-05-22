import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../Moduls/User';
import {Login} from '../../Moduls/Login';
import {Router} from '@angular/router';





@Injectable({
  providedIn: 'root'
})
export class UserHandlerService {

  private  url = 'http://localhost:8085/';



    constructor(private http: HttpClient, private router: Router) { }



    public snigIn(loginRequest: Login) {
          this.http.post<User>(this.url + 'SingIn', {username: loginRequest.username, password: loginRequest.password }).subscribe((data: User) => (
              localStorage.setItem('myToken', data.token),
                  this.router.navigate(['/teams'])
              )
    , error => (alert('Some thing want wrong!')
          ,
            this.router.navigate(['/login'])
    ));
  }

 public getUserToken() {
       return  !!localStorage.getItem('myToken');
 }

}
/*
=
 */
