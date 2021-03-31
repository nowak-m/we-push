import { SafeUrl } from '@angular/platform-browser';

export interface LinkHandler {
  open: (url: SafeUrl) => void;
}
