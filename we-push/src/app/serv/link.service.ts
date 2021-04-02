import { Injectable } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { LinkHandler } from '../shared/link-service.model';

const openUrl = (url: SafeUrl) => {
  switch (url) {
    case 'github':
      window.open('https://github.com/');
      break;
    default:
      window.open(`${url}`);
  }
};

@Injectable({
  providedIn: 'root'
})
export class LinkService implements LinkHandler {
  openUrl;

  constructor() {
    this.openUrl = openUrl;
  }
}
