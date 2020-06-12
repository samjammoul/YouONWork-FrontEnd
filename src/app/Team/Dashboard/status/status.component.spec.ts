import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { StatusComponent } from './status.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from "@angular/platform-browser";
import {Status} from "../../../Moduls/Status";
import {TeamHandlerService} from "../../TeamServ/team-handler.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async(() => {

      TestBed.configureTestingModule({
      declarations: [ StatusComponent ],
          imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
          providers: [TeamHandlerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    component.status =   {
        id: 1,
        statusText: 's1',
        teamId: 10,
        taskList: [
            {
                id: 21,
                taskText: 'task1',
                statusId: 1
            }
        ]
    };
    fixture.detectChanges();
  });

  it('should be s1 in status text',  fakeAsync(() => {

     const  h1Des1 = fixture.debugElement.queryAll(By.css('h2'));
     const  nativeH1T1: HTMLInputElement = h1Des1[0].nativeElement;
     expect(nativeH1T1.textContent).toBe('s1');
    }));
  /*
  it('should be Task1',  fakeAsync(() => {
        const  h1Des1 = fixture.debugElement.queryAll(By.css('h2'));
        const  nativeH1T1: HTMLInputElement = h1Des1[0].nativeElement;
        const  nativeH1T2: HTMLInputElement = h1Des1[1].nativeElement;
        const  nativeH1T3: HTMLInputElement = h1Des1[2].nativeElement;
        expect(nativeH1T1.textContent).toBe('s1');
        expect(nativeH1T2.textContent).toBe('s2');
        expect(nativeH1T3.textContent).toBe('s3');

    }));

   */
});
