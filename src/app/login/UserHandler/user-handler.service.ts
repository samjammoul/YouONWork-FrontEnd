import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import {Login} from '../../Moduls/Login';
import {Token} from '../../Moduls/Token';
import {catchError} from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class UserHandlerService {

  private  url = 'http://localhost:8085/';
    constructor(private http: HttpClient) {
    }
     signIn(loginRequest: Login): Observable<Token> {
          return this.http.post<Token>(this.url + 'SignIn', {username: loginRequest.username, password: loginRequest.password });
  }
     public getUserToken() {
       return  !!localStorage.getItem('MyToken');
     }

     signIn2(): Observable<Token> {
        return  this.http.post<Token>(this.url + 'SignIn', {username: 'sam', password: 'sam' }
        );
    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
         //   console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            /* console.error(
                   `Backend returned code ${error.status}, ` +
                   `body was: ${error.error}`);


           }
           // return an observable with a user-facing error message
           return throwError(
               'Something bad happened; please try again later.');
             */
        }
    }

}

