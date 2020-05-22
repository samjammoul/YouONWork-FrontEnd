import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import {TeamHandlerService} from '../../TeamServ/team-handler.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskComponent, HttpClient ],
        providers: [TeamHandlerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
