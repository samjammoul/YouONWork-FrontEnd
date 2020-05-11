import {HttpClient, HttpResponse} from '@angular/common/http';

import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {Smartphone} from './app.component';

interface Course {
  description: string;
  courseListIcon: string;
  iconUrl: string;
  longDescription: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient){}
 readonly appurl = 'assets/data/smartphone.json';

  getSmartphone() {
    return this.http.get(this.appurl);
  }

}
