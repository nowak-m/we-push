import { Component, Input, ViewEncapsulation } from '@angular/core';

export interface PushEventViewData {
  avatar: string;
  intro: string;
  summary: string[];
  outro: string;
}

const identify = (index: number, item: string) => item;

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventViewComponent {
  @Input() data: PushEventViewData = {
    avatar: 'https://octodex.github.com/images/original.png',
    intro: 'Hello there,',
    summary: [
      'user <span>octocat</span>',
      'has just pushed <span>2</span> commits',
      'into <span>angular</span> repo'
    ],
    outro: 'We hope you had a productive day, too!'
  };

  identify;

  constructor() {
    this.identify = identify;
  }
}
