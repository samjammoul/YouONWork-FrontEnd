import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {


  headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  params = new HttpParams()
    .set('sa', 'popop');
  usersUrl = 'http://localhost:8443/sam/1';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  params2 = new HttpParams()
    .set('username', 'Hey')
    .set('password' , 'pass');
  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8443/sam/1');
  }
  public findAll2(): Observable<User[]> {
    return this.http.post<User[]>('http://localhost:8443/sam/2', 'hey');
  }
  public findAll3(): Observable<User[]> {

    return this.http.post<User[]>('http://localhost:8443/sam/3', this.params);

  }

  public findAll4() {
    return this.http.post('http://localhost:8443/book/add', this.params2);
  }


}
