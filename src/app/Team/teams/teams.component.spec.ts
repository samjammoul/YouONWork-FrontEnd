import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { TeamsComponent } from './teams.component';
import {UserHandlerService} from "../../login/UserHandler/user-handler.service";
import {TeamHandlerService} from "../TeamServ/team-handler.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {By} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";
import {Router, RouterModule} from "@angular/router";
import {Component} from "@angular/core";
import {TeamDashBoardComponent} from "../Dashboard/team-dashoard/team-dash-board.component";
import {AuthGuardService} from "../../Auth/Auth-guard/auth-guard.service";
import {Location} from "@angular/common";
import {DragDropModule} from "@angular/cdk/drag-drop";


describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;
  let teamHandlerService: TeamHandlerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsComponent, TeamDashBoardComponent],
        providers: [TeamHandlerService],
        imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes(
            [{ path: 'dashboard/:id', component: TeamDashBoardComponent}, { path: 'teams', component: TeamsComponent}
        ])
            , RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should has 3 teams', () => {
        component.teams = [
            {
                "teamId": 10,
                "teamName": "team1",
                "adminId": 33
            },
            {
                "teamId": 11,
                "teamName": "team2",
                "adminId": 33
            },
            {
                "teamId": 12,
                "teamName": "team3",
                "adminId": 33
            }
        ];
        fixture.detectChanges();
        const  h1Des1 = fixture.debugElement.queryAll(By.css('mat-list-item'));
        const  nativeH1T1: HTMLInputElement = h1Des1[0].nativeElement;
        const  nativeH1T2: HTMLInputElement = h1Des1[1].nativeElement;
        const  nativeH1T3: HTMLInputElement = h1Des1[2].nativeElement;
        expect(nativeH1T1.textContent).toContain('team1');
        expect(nativeH1T2.textContent).toContain('team2');
        expect(nativeH1T3.textContent).toContain('team3');
    });

  it('should navigate to /dashboard/10 + button click ', fakeAsync(() => {
      component.teams = [
          {
              "teamId": 10,
              "teamName": "team1",
              "adminId": 33
          },
          {
              "teamId": 11,
              "teamName": "team2",
              "adminId": 33
          },
          {
              "teamId": 12,
              "teamName": "team3",
              "adminId": 33
          }
      ]
      fixture.detectChanges();
      const location = TestBed.inject(Location);
      const  linkDes = fixture.debugElement.queryAll(By.css('mat-list-item'));
      const nativeButton: HTMLInputElement = linkDes[0].nativeElement;
      nativeButton.click();
      tick();
      fixture.detectChanges();
     // fixture.whenStable().then(() => {
      expect(location.path()).toBe('/dashboard/10');
    //  });
    }));
    it('should ', fakeAsync(() => {
        component.teams = [
            {
                "teamId": 10,
                "teamName": "team1",
                "adminId": 33
            },
            {
                "teamId": 11,
                "teamName": "team2",
                "adminId": 33
            },
            {
                "teamId": 12,
                "teamName": "team3",
                "adminId": 33
            }
        ]
        fixture.detectChanges();
        const location = TestBed.inject(Location);
        const  linkDes = fixture.debugElement.queryAll(By.css('mat-list-item'));
        const nativeButton: HTMLInputElement = linkDes[0].nativeElement;
        nativeButton.click();
        tick();
        fixture.detectChanges();
        // fixture.whenStable().then(() => {
        expect(location.path()).toBe('/dashboard/10');
        //  });
    }));
});




@Component({template: ''})
class DummyCom {
}

