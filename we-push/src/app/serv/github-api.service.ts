import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private eventsUrl = `https://api.github.com/events`;

  events$ = this.http.get<GithubEvent[]>(this.eventsUrl, {
    observe: 'response'
  });

  constructor(public http: HttpClient) {}
}
