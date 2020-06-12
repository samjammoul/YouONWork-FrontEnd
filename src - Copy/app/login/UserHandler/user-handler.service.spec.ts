import { TestBed } from '@angular/core/testing';

import { UserHandlerService } from './user-handler.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {RouterTestingModule} from "@angular/router/testing";
import {Router, RouterModule} from "@angular/router";


describe('UserHandlerService', () => {

  //  const service: UserHandlerService;
    beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule , RouterTestingModule, RouterModule.forRoot([])],
        providers: [UserHandlerService]
    });
  });

});
