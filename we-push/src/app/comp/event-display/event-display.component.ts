import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { filter, finalize, map, switchMap, take, tap } from 'rxjs/operators';
import { GithubApiService } from 'src/app/serv/github-api-http.service';
import { EventViewData } from '../event-view/event-view.component';

interface EventViewDataWrapper {
  data: EventViewData;
  sequence: number;
}
@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.scss']
})
export class EventDisplayComponent {
  event$: Observable<EventViewDataWrapper>;

  constructor(public githubService: GithubApiService, public router: Router) {
    this.event$ = this.githubService.pushEvents$.pipe(
      map(pushEvents =>
        pushEvents.map(event => {
          const eventData: EventViewData = {
            avatar: event.actor.avatar_url,
            user: event.actor.display_login,
            repo: event.repo.url,
            commits: event.payload.commits.length
          };

          return eventData;
        })
      ),
      map(eventViews =>
        eventViews.map(eventView => {
          eventView.repo = eventView.repo.split('/').pop() as string;

          return eventView;
        })
      ),
      switchMap(events =>
        timer(0, 15000).pipe(
          take(events.length + 1),
          map(i => {
            return {
              data: events[i],
              sequence: i
            } as EventViewDataWrapper;
          })
        )
      ),
      finalize(async () => this.router.navigate(['controls'])),
      filter(e => undefined !== e)
    );
  }
}
