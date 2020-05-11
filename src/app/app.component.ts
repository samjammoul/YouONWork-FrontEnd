import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// tslint:disable-next-line:import-spacing


import {Config} from 'codelyzer';
import {map} from 'rxjs/operators';
import { AppService } from './app.service';
import {ApiService} from './api-services/api.service';

export interface Smartphone {
  id: string;
  name: string;
  desc: string;
  price: number;
  updated: Date;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BigIdea';
  posts: User[] ;
  posts2: User[] ;
  posts3: User[] ;

  constructor(private api: ApiService) {
    this.api.findAll().subscribe(data => {
      this.posts = data;
    });
    this.api.findAll2().subscribe(data => {
      this.posts2 = data;
    });
    this.api.findAll3().subscribe(data => {
      this.posts3 = data;
    });
  }
  adduser() {
    this.api.findAll4();
  }

}

export class User {
  name: string;
  password: string;
}
