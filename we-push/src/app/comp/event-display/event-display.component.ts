import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { filter, finalize, map, switchMap, take } from 'rxjs/operators';
import { flyInOut } from 'src/app/animations/component-animations';
import {
  PushEventsService,
  GithubPushEvent
} from 'src/app/shared/github-api-service.model';
import { MotivationService } from 'src/app/shared/motivation-service.model';
import { PushEventViewData } from '../event-view/event-view.component';

const viewDataTransformer = (
  event: GithubPushEvent,
  motivationService: MotivationService
): PushEventViewData => {
  const viewData: PushEventViewData = {
    avatar: event.actor.avatar_url,
    intro: motivationService.getIntro(),
    summary: motivationService.getSummary(
      event.actor.display_login,
      event.repo.url.split('/').pop() as string,
      event.payload.commits.length
    ),
    outro: motivationService.getOutro()
  };

  return viewData;
};

interface EventViewDataWrapper {
  data: PushEventViewData;
  sequence: number;
}
@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.scss'],
  animations: [flyInOut]
})
export class EventDisplayComponent {
  event$: Observable<EventViewDataWrapper>;

  constructor(
    @Inject('PushEventsService') public pushEventsService: PushEventsService,
    @Inject('MotivationService') public motivationService: MotivationService,
    public router: Router
  ) {
    this.event$ = this.pushEventsService.events$.pipe(
      map(pushEvents =>
        pushEvents.map(event =>
          viewDataTransformer(event, this.motivationService)
        )
      ),
      switchMap(events =>
        timer(0, 15000).pipe(
          take(events.length + 1),
          map(
            i =>
              ({
                data: events[i],
                sequence: i
              } as EventViewDataWrapper)
          )
        )
      ),
      finalize(async () => this.router.navigate(['controls'])),
      filter(e => undefined !== e)
    );
  }
}
