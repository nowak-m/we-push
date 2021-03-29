import { Component } from '@angular/core';
import { GithubApiService } from 'src/app/serv/github-api.service';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.scss']
})
export class EventDisplayComponent {
  constructor(public githubService: GithubApiService) {}
}
