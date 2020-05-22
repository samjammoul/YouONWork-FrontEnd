import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Team} from '../../Moduls/Team';
import {Status} from '../../Moduls/Status';


@Injectable()
export class TeamHandlerService {

  constructor(private http: HttpClient) {
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
            console.log(error);
        });
    }
}

