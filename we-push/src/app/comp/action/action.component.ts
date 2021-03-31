import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ActionComponentData {
  id: string;
  src: string;
  alt: string;
  buttonText: string;
}

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent {
  @Input() data: ActionComponentData = {
    id: '',
    src: '',
    alt: '',
    buttonText: ''
  };

  @Output() readonly clicked = new EventEmitter<string>();

  onClick() {
    this.clicked.emit(this.data.id);
  }
}
