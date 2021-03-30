import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { GithubEventsHttpService } from './github-events-http.service';

describe('GithubApiService', () => {
  let service: GithubEventsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: GithubEventsHttpService,
          useValue: {
            events$: of([])
          }
        }
      ]
    });
    service = TestBed.inject(GithubEventsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
