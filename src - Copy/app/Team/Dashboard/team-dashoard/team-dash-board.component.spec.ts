import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import { TeamDashBoardComponent } from './team-dash-board.component';
import { RouterModule} from '@angular/router';
import {StatusComponent} from '../status/status.component';
import {By} from '@angular/platform-browser';
import {Status} from '../../../Moduls/Status';
import {TeamHandlerService} from '../../TeamServ/team-handler.service';
import {browser, by, element} from 'protractor';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TaskComponent} from '../task/task.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TeamsComponent} from '../../teams/teams.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {} from '@angular/cdk/testing';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {Location} from "@angular/common";
describe('TeamDashBoardComponent', () => {
    let component: TeamDashBoardComponent;
    let statusCom: StatusComponent;
    let fixture: ComponentFixture<TeamDashBoardComponent>;
    let fixtureStatusCom: ComponentFixture<StatusComponent>;
    let spy: any;
    let teamHandlerService: TeamHandlerService;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TeamDashBoardComponent,  StatusComponent, TaskComponent],
            imports: [ HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule.withRoutes(
                [{ path: 'dashboard/:id', component: TeamDashBoardComponent}
                ]), ReactiveFormsModule, FormsModule, HttpClientTestingModule , DragDropModule],
            providers: [TeamHandlerService]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TeamDashBoardComponent);
        component = fixture.componentInstance;

        /*
        component.statusList = [ {
            id: 1,
            statusText: 's1',
            teamId: 10,
            taskList: [
                {
                    id: 21,
                    taskText: 'Task1',
                    statusId: 1
                }
            ]
        },
            {
                id: 2,
                statusText: 's2',
                teamId: 10,
                taskList: []
            },
            {
                id: 3,
                statusText: 's3',
                teamId: 10,
                taskList: []
            }];

         */
        fixture.detectChanges();

    });

/*

    it('should be 3 lists Status',  fakeAsync(() => {
    const  h1Des1 = fixture.debugElement.queryAll(By.css('h2'));
    const  nativeH1T1: HTMLInputElement = h1Des1[0].nativeElement;
    const  nativeH1T2: HTMLInputElement = h1Des1[1].nativeElement;
    const  nativeH1T3: HTMLInputElement = h1Des1[2].nativeElement;
    expect(nativeH1T1.textContent).toBe('s1');
    expect(nativeH1T2.textContent).toBe('s2');
    expect(nativeH1T3.textContent).toBe('s3');

    }));

 */

    it('should a task added ',  () => {
        localStorage.setItem('MyToken','eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW0iLCJleHAiOjE1OTE4MjQ1NjUsImlhdCI6MTU5MTgwNjU2NX0.n0LpoT_BDBgPUdo3WVtMxt3tdcPcSuwUUw81Xo15yCB7KUeWYd4H4nL7WBW9MugahkZ9-eoBuBxUf6cvyGwiZA');
     //   component.statusList = [];
        //component.getDataOfTeam(11);
      //  fixture.detectChanges();
       // expect(localStorage.getItem('MyToken')).toBe('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW0iLCJleHAiOjE1OTE4MjQ1NjUsImlhdCI6MTU5MTgwNjU2NX0.n0LpoT_BDBgPUdo3WVtMxt3tdcPcSuwUUw81Xo15yCB7KUeWYd4H4nL7WBW9MugahkZ9-eoBuBxUf6cvyGwiZA');
       // browser.get('/dashboard/11');
        const  h1Des1 = fixture.debugElement.queryAll(By.css('h2'));
        const  nativeH1T1: HTMLInputElement = h1Des1[0].nativeElement;
        expect(nativeH1T1.textContent).toBe('s4');
    });




});
