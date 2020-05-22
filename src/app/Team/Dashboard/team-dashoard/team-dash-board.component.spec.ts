import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDashBoardComponent } from './team-dash-board.component';
import {ActivatedRouteSnapshot, RouterModule} from '@angular/router';

describe('TeamDashBoardComponent', () => {
  let component: TeamDashBoardComponent;
  let fixture: ComponentFixture<TeamDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDashBoardComponent, RouterModule.forRoot([]) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
