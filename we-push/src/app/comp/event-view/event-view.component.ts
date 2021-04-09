import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  styleUrls: ['./event-view.component.scss']
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

  @Output() readonly clicked = new EventEmitter<string>();

  identify;

  constructor() {
    this.identify = identify;
  }

  onClick() {
    this.clicked.emit('');
  }
}
