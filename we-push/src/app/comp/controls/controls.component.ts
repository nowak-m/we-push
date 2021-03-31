import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LinkHandler } from 'src/app/shared/link-service.model';
import { ActionComponentData } from '../action/action.component';

const identify = (index: number, item: ActionComponentData) => item.id;

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
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

  identify;

  constructor(
    public router: Router,
    @Inject('LinkHandler') public linkHanlder: LinkHandler
  ) {
    this.identify = identify;
  }

  onSelect(action: string) {
    switch (action) {
      case 'procrastinate':
        this.router.navigate(['display']).catch(error => console.error(error));
        break;
      case 'work':
        this.linkHanlder.open('github');
        break;
      default:
    }
  }
}
