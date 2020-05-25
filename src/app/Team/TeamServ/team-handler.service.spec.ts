import { TestBed } from '@angular/core/testing';

import { TeamHandlerService } from './team-handler.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TeamHandlerService', () => {
  let service: TeamHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [TeamHandlerService]
    });
    service = TestBed.inject(TeamHandlerService);
  });
});
