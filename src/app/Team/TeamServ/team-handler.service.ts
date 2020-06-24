import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Team} from '../../Moduls/Team';
import {Status} from '../../Moduls/Status';
import {tap} from "rxjs/operators";


@Injectable()
export class TeamHandlerService {

  constructor(private http: HttpClient) {
  }

    private _refresh = new Subject<void>();
  get refresh(){
      return this._refresh;
  }

    private  url = 'http://localhost:8085/';


     params = new HttpParams()
        .set('page', '4');


    getAllTeams(): Observable<Team[]> {
        return  this.http.get<Team[]>(this.url + 'Team');
    }

    getAllStatusOfGroup(id: number): Observable<Status[]> {
        return  this.http.get<Status[]>(this.url + 'Team/Status/' + id);
    }
    changeStatusOfTask(taskId: number, currentStatusId: number) {
        return  this.http.put(this.url + 'Team/Status/Task/' + taskId + '/' + currentStatusId, {}
         ).subscribe(error => {
             console.log(error);
        });
    }
    deleteTask(taskId: number) {
        return  this.http.delete(this.url + 'Team/Status/Task/' + taskId
        ).subscribe(error => {
        });
    }
    addTask(taskText: string, statusId: number) {
        return  this.http.post(this.url + 'Team/Status/Task/' , {taskText: taskText, statusId: statusId}
        ).subscribe(error => {
        });
    }
    addStatus(statusText: string, teamId: number) {
        return  this.http.post(this.url + 'Team/Status' , {statusText: statusText, teamId: teamId}
        ).subscribe(error => {
        });
    }
    addTeam(teamText: string) {
        return  this.http.post(this.url + 'Team' , { teamName: teamText }
        ).subscribe(error => {
        });
    }
    deleteTeam(teamId: number) {
        return  this.http.delete(this.url + 'Team/' + teamId
        ).subscribe(error => {
        });
    }
    deleteStatus(statusId: number) {
        return  this.http.delete(this.url + 'Team/Status/' + statusId
        ).subscribe(error => {
        });

    }
}

