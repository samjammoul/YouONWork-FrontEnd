import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDashBoardComponent } from './team-dash-board.component';
import {ActivatedRouteSnapshot, RouterModule} from '@angular/router';
import {Component} from '@angular/core';

import {By} from '@angular/platform-browser';
import {StatusComponent} from '../status/status.component';

describe('TeamDashBoardComponent', () => {
    let component: TeamDashBoardComponent;
    let statusCom: StatusComponent;
    let fixture: ComponentFixture<TeamDashBoardComponent>;
    let fixtureStatusCom: ComponentFixture<StatusComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TeamDashBoardComponent, RouterModule.forRoot([]), StatusComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TeamDashBoardComponent);
        fixtureStatusCom = TestBed.createComponent(StatusComponent);
        statusCom = fixtureStatusCom.componentInstance;
        component = fixture.componentInstance;
        fixture.detectChanges();
        fixtureStatusCom.detectChanges();
    });
    /*
    it('should be 3 lists Status', () => {
        component.statusList = [ {
            "id": 1,
            "statusText": "s1",
            "teamId": 10,
            "taskList": [
                {
                    "id": 21,
                    "taskText": "sdfsdf",
                    "statusId": 1
                }
            ]
        },
            {
                "id": 2,
                "statusText": "s2",
                "teamId": 10,
                "taskList": []
            },
            {
                "id": 3,
                "statusText": "s3",
                "teamId": 10,
                "taskList": []
            }];
        fixture.detectChanges();
        const  h1Des1 = fixture.debugElement.queryAll(By.css('h2'));
        const  nativeH1S1: HTMLInputElement = h1Des1[0].nativeElement;
   //     const  nativeH1S2: HTMLInputElement = h1Des1[0].nativeElement;
  //      const  nativeH1S3: HTMLInputElement = h1Des1[0].nativeElement;
        statusCom.status = {
            "id": 1,
            "statusText": "s1",
            "teamId": 10,
            "taskList": [
                {
                    "id": 21,
                    "taskText": "sdfsdf",
                    "statusId": 1
                }
            ]
        }
        fixtureStatusCom.detectChanges();
        debugger;

     //   expect(nativeH1S1.textContent).toBe('s1');
        /*
       expect(nativeH1S2.textContent).toBe('s2');
       expect(nativeH1S3.textContent).toBe('s3');



    });

  */
});

@Component({template: ''})
class DummyCoponent {
}
