import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  PushEventsService,
  GithubPushEvent,
  GithubEvent
} from '../shared/github-api-service.model';
import { GithubEventsHttpService } from './github-events-http.service';

const isPushEvent = (event: GithubEvent): boolean => event.type === 'PushEvent';

@Injectable({
  providedIn: 'root'
})
export class GithubPushEventsHttpService implements PushEventsService {
  events$: Observable<GithubPushEvent[]>;

  constructor(public eventsService: GithubEventsHttpService) {
    this.events$ = eventsService.events$.pipe(
      map(
        events =>
          events.filter(event => isPushEvent(event)) as GithubPushEvent[]
      )
    );
  }
}
