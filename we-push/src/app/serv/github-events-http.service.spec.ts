import { TestBed } from '@angular/core/testing';

import { GithubEventsHttpService } from './github-events-http.service';

describe('GithubApiService', () => {
  let service: GithubEventsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubEventsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
