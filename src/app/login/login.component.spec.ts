import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
        imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
        providers: [ RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
        expect(component).toBeTruthy();
    });

  it('Should be a Log In input on the page', () => {
      const  inputDes = fixture.debugElement.queryAll(By.css('input'));
      const  nativeInput: HTMLInputElement = inputDes[2].nativeElement;
      expect(nativeInput.value).toBe('Log In');
  });

});
