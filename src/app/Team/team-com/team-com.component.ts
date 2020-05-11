import { Component, OnInit } from '@angular/core';
import {TeamFacade} from '../Team.facade';

@Component({
  selector: 'app-team-com',
  templateUrl: './team-com.component.html',
  styleUrls: ['./team-com.component.css']
})
export class TeamComComponent implements OnInit {
  title = 'Tour of Heroes';
   mycondition = true;

  constructor() {

  }
  names: any[] = ['sam', 'sam', 's8'];

  ngOnInit(): void {

  }
  setcon() {
     this.mycondition = !this.mycondition;
  }
}
