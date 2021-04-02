import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  GithubPushEvent,
  PushEventsService
} from '../shared/github-api-service.model';

@Injectable({
  providedIn: 'root'
})
export class MockPushEventsService implements PushEventsService {
  events$: Observable<GithubPushEvent[]>;

  constructor() {
    this.events$ = of([
      {
        id: '',
        type: '',
        actor: {
          avatar_url:
            'https://octodex.github.com/images/Sentrytocat_octodex.jpg',
          display_login: 'Sentrytocat',
          gravatar_id: ''
        },
        repo: {
          id: 0,
          name: 'angular',
          url: 'https://github.com/angular'
        },
        payload: {
          commits: [
            {
              message: 'Put down the fire'
            }
          ],
          ref: ''
        }
      },
      {
        id: '',
        type: '',
        actor: {
          avatar_url: 'https://octodex.github.com/images/labtocat.png',
          display_login: 'Labtocat',
          gravatar_id: ''
        },
        repo: {
          id: 0,
          name: 'angular',
          url: 'https://github.com/angular'
        },
        payload: {
          commits: [
            {
              message: 'Add experimental feature'
            }
          ],
          ref: ''
        }
      },
      {
        id: '',
        type: '',
        actor: {
          avatar_url: 'https://octodex.github.com/images/dodgetocat_v2.png',
          display_login: 'Dodgetocat v2',
          gravatar_id: ''
        },
        repo: {
          id: 0,
          name: 'angular',
          url: 'https://github.com/angular'
        },
        payload: {
          commits: [
            {
              message: 'Dodged a bug'
            }
          ],
          ref: ''
        }
      },
      {
        id: '',
        type: '',
        actor: {
          avatar_url: 'https://octodex.github.com/images/chellocat.jpg',
          display_login: 'Chellocat',
          gravatar_id: ''
        },
        repo: {
          id: 0,
          name: 'angular',
          url: 'https://github.com/angular'
        },
        payload: {
          commits: [
            {
              message: 'Add material portal outlet'
            }
          ],
          ref: ''
        }
      }
    ]);
  }
}
