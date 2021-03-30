import { fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { GithubEvent } from '../shared/github-api-service.model';
import { GithubEventsHttpService } from './github-events-http.service';

import { GithubPushEventsHttpService } from './github-push-events-http.service';

describe('GithubPushEventsHttpService', () => {
  let service: GithubPushEventsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: GithubEventsHttpService,
          useValue: {
            events$: of([
              {
                type: "PushEvent"
              },
              {
                type: "OtherEvent"
              }
            ] as GithubEvent[])
          }
        }
      ]
    });
    service = TestBed.inject(GithubPushEventsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter PushEvents', fakeAsync(() => {
    service.events$.pipe(take(1)).subscribe(events => {
      events.forEach(event => {
        expect(event.type).toEqual("PushEvent");
      })
    })
  }))
});
