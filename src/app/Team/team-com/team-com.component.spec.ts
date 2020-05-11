import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComComponent } from './team-com.component';

describe('TeamComComponent', () => {
  let component: TeamComComponent;
  let fixture: ComponentFixture<TeamComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
