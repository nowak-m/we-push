import { TestBed } from '@angular/core/testing';

import { MotivationService } from './motivation-local.service';

describe('MotivationService', () => {
  let service: MotivationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotivationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
