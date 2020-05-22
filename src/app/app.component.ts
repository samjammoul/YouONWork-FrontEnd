import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// tslint:disable-next-line:import-spacing


import {Config} from 'codelyzer';
import {map} from 'rxjs/operators';
import { AppService } from './app.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BigIdea';


  constructor() {
  }


}


