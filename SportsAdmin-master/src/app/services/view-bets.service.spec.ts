import { TestBed } from '@angular/core/testing';

import { ViewBetsService } from './view-bets.service';

describe('ViewBetsService', () => {
  let service: ViewBetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewBetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
