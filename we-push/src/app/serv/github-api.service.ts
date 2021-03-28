import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

export interface GithubEventActor {
  avatar_url: string;
  display_login: string;
  gravatar_id: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  url: string;
}

export interface GithubEvent {
  id: string;
  type: string;
  actor: GithubEventActor;
  repo: GithubRepo;
}

export interface GithubPushEvent extends GithubEvent {
  payload: {
    commits: {
      message: string;
    }[];
    ref: string;
  };
}

const convertInterval = (intervalInSeconds: string): number =>
  +intervalInSeconds * 1000;

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  events$: Observable<GithubEvent[]>;

  pushEvents$: Observable<GithubPushEvent[]>;

  private readonly eventsUrl = `https://api.github.com/events`;

  private apiAvailable = true;

  private apiInterval = '';

  constructor(public http: HttpClient) {
    this.events$ = of('').pipe(
      switchMap(() => {
        if (this.apiAvailable) {
          this.apiAvailable = false;

          return this.http
            .get<GithubEvent[]>(this.eventsUrl, {
              observe: 'response'
            })
            .pipe(
              map(response => {
                this.apiInterval = response.headers.get('X-Token') || '60';

                return response.body || ([] as GithubEvent[]);
              }),
              tap(() => {
                setTimeout(() => {
                  this.apiAvailable = true;
                }, convertInterval(this.apiInterval));
              })
            );
        } else {
          console.error(
            `Github API is locked for ${this.apiInterval} seconds, try again later.`
          );

          return of([] as GithubEvent[]);
        }
      })
    );

    this.pushEvents$ = this.events$.pipe(
      map(
        events =>
          events.filter(e => e.type === 'PushEvent') as GithubPushEvent[]
      )
    );
  }
}
