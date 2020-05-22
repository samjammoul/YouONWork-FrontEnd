import { TestBed } from '@angular/core/testing';

import { UserHandlerService } from './user-handler.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {RouterTestingModule} from "@angular/router/testing";

describe('UserHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule],
        providers: [UserHandlerService]
    });
  });

  it('should be created', () => {
    const  service: UserHandlerService = TestBed.get(UserHandlerService);
    expect(service).toBeTruthy();
  });
});
