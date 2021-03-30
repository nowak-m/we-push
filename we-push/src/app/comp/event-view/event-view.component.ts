import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MotivationLocalService } from 'src/app/serv/motivation-local.service';

export interface EventViewData {
  avatar: string;
  user: string;
  repo: string;
  commits: number;
}

const identify = (index: number, item: string) => item;

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventViewComponent implements OnInit {
  @Input() data: EventViewData = {
    avatar: 'https://octodex.github.com/images/original.png',
    user: 'octocat',
    repo: 'https://github.com/angular',
    commits: 5
  };

  intro = '';

  outro = '';

  summary: string[] = [];

  identify;

  constructor(public motivationService: MotivationLocalService) {
    this.identify = identify;
  }

  ngOnInit(): void {
    this.intro = this.motivationService.getIntro();
    this.summary = this.motivationService.getSummary(
      this.data.user,
      this.data.repo,
      this.data.commits
    );
    this.outro = this.motivationService.getOutro();
  }
}
