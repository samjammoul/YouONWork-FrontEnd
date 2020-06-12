import { Component, OnInit } from '@angular/core';
import {TeamHandlerService} from '../TeamServ/team-handler.service';
import {Team} from '../../Moduls/Team';
import {Route, Router} from '@angular/router';



@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

    teams: Team[];
  constructor(private teamHandler: TeamHandlerService, private route: Router) {
      this.teamHandler.getAllTeams().subscribe(data => this.teams = data );

  }

  ngOnInit(): void {
  }

}
// this.route.navigate(['/team', 5] );
