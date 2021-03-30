import { TestBed } from '@angular/core/testing';

import { MotivationLocalService } from './motivation-local.service';

describe('MotivationService', () => {
  let service: MotivationLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotivationLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
