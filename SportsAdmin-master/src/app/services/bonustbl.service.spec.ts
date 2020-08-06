import { TestBed } from '@angular/core/testing';

import { BonustblService } from './bonustbl.service';

describe('BonustblService', () => {
  let service: BonustblService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonustblService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
