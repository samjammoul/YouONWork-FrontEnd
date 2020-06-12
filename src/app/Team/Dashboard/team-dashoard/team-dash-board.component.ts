import {Component, OnDestroy, OnInit} from '@angular/core';
import {Status} from '../../../Moduls/Status';
import {ActivatedRoute, Router} from "@angular/router";
import {TeamHandlerService} from '../../TeamServ/team-handler.service';
import {Subject} from "rxjs";


@Component({
  selector: 'app-team-dash-board',
  templateUrl: './team-dash-board.component.html',
  styleUrls: ['./team-dash-board.component.css']
})
export class TeamDashBoardComponent implements OnInit  {
    id;
    statusList: Status[] = [];

    constructor(private aroute: ActivatedRoute,
                private teamHandler: TeamHandlerService,
                private route: Router
    ) {

        this.refreshPage();
    }


    ngOnInit(): void {
    }





    getDataOfTeam(id: number) {
        this.teamHandler.getAllStatusOfGroup(id).subscribe(data => {
                this.set(data);
            }
        );
    }


    checkAuth(id: number) {
        this.statusList = [];
        this.teamHandler.getAllTeams().subscribe(data =>{
            for (let i = 0; i < data.length; i++) {
                if (data[i].teamId == id ) {
                    this.getDataOfTeam(id);
                    break;
                }
                if (i == data.length-1){
                    this.route.navigate(['/teams']);
                }
            }
        });

    }
    set(list: Status[]) {
        for (let i = 0; i < list.length; i++) {
            this.statusList.push(list[i]);


        }
    }

    refresh($event: any) {
        this.refreshPage();
    }

    refreshPage() {
        this.id = this.aroute.snapshot.params.id;
        this.checkAuth(this.id);
    }
}

