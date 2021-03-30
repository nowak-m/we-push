import { Observable } from 'rxjs';

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

export interface GithubApiService {
  pushEvents$: Observable<GithubPushEvent[]>;
}
