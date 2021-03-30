import { TestBed } from '@angular/core/testing';

import { GithubApiHttpService } from './github-api-http.service';

describe('GithubApiService', () => {
  let service: GithubApiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubApiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
