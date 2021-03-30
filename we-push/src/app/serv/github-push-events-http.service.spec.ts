import { TestBed } from '@angular/core/testing';

import { GithubPushEventsHttpService } from './github-push-events-http.service';

describe('GithubPushEventsHttpService', () => {
  let service: GithubPushEventsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubPushEventsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
