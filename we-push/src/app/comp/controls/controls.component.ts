import { Component, OnInit } from '@angular/core';
import { ActionComponentData } from '../action/action.component';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  actions: ActionComponentData[] = [
    {
      id: 'procrastinate',
      src: 'https://octodex.github.com/images/hula_loop_octodex03.gif',
      alt: 'Photo of a procrastinating Octocat',
      buttonText: 'Procrastinate!'
    },
    {
      id: 'work',
      src: 'https://octodex.github.com/images/original.png',
      alt: 'Photo of an Octocat',
      buttonText: 'Head to Github!'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
