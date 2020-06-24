import {Component, OnDestroy, OnInit} from '@angular/core';
import {Status} from '../../../Moduls/Status';
import {ActivatedRoute, Router} from "@angular/router";
import {TeamHandlerService} from '../../TeamServ/team-handler.service';
import {Subject} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-team-dash-board',
  templateUrl: './team-dash-board.component.html',
  styleUrls: ['./team-dash-board.component.css']
})
export class TeamDashBoardComponent implements OnInit  {
    id;
    statusList: Status[] = [];
    statusAddable = false;
    // @ts-ignore
    addStatusForm = new FormGroup('');
    constructor(private aroute: ActivatedRoute,
                private teamHandler: TeamHandlerService,
                private route: Router,
                private fb: FormBuilder
    ) {
        this.refreshPage();
        const StatusForm = {
            statusName: new FormControl('', [
                Validators.required,
                Validators.pattern('[a-zA-Z0-9-]+')
            ]),
        };
        this.addStatusForm = this.fb.group(StatusForm);
    }

    get statusName() {

        return this.addStatusForm.get('statusName');
    }

    ngOnInit(): void {
    }

    addStatus() {
        this.MakeStatusAddAble();
        if (this.addStatusForm.invalid) {
        } else {
            this.id = this.aroute.snapshot.params.id;
            this.teamHandler.addStatus(this.addStatusForm.value.statusName, this.id);
            this.id = this.aroute.snapshot.params.id;
            this.statusList = [];
            this.teamHandler.getAllStatusOfGroup(this.id).subscribe(data => this.statusList = data);
        }
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
    MakeStatusAddAble() {
        this.statusAddable = !this.statusAddable;
    }
}

