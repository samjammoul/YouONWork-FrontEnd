import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusComponent } from './status.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async(() => {

      TestBed.configureTestingModule({
      declarations: [ StatusComponent, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
