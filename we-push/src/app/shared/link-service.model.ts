import { SafeUrl } from '@angular/platform-browser';

export interface LinkHandler {
  openUrl: (url: SafeUrl) => void;
}
