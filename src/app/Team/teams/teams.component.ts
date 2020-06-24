import { Component, OnInit } from '@angular/core';
import {TeamHandlerService} from '../TeamServ/team-handler.service';
import {Team} from '../../Moduls/Team';
import {Route, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

    teams: Team[];
    teamAddable = false;
    // @ts-ignore
    addTeamForm = new FormGroup('');
  constructor(private teamHandler: TeamHandlerService,
              private route: Router,
              private fb: FormBuilder) {

      const TeamForm = {
          teamName: new FormControl('', [
              Validators.required,
              Validators.pattern('[a-zA-Z0-9-]+')
          ]),
      };
      this.addTeamForm = this.fb.group(TeamForm);
  }
    get teamName() {

        return this.addTeamForm.get('teamName');
    }
  ngOnInit(): void {
      this.teamHandler.getAllTeams().subscribe(data => this.teams = data );
  }
   addTeam() {
        this.makeTeamAddAble();
        if (this.addTeamForm.invalid) {
        } else {
            this.teamHandler.addTeam(this.addTeamForm.value.teamName);
        }
  }
    makeTeamAddAble() {
        this.teamAddable = !this.teamAddable;
    }
    refresh() {
        this.teamHandler.getAllTeams().subscribe(data => this.teams = data );
    }
    deleteTeam(teamId: number): void {
        this.teamHandler.deleteTeam(teamId);
    }
}
// this.route.navigate(['/team', 5] );
