import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsComponent } from './teams.component';
import {UserHandlerService} from "../../login/UserHandler/user-handler.service";
import {TeamHandlerService} from "../TeamServ/team-handler.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsComponent, HttpClientTestingModule],
        providers: [TeamHandlerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
