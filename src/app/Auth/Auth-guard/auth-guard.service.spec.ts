import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {UserHandlerService} from "../../login/UserHandler/user-handler.service";
import {RouterModule} from "@angular/router";

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule, RouterModule.forRoot([])],
        providers: [UserHandlerService]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
