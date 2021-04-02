import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { WelcomeDialogComponent } from './comp/welcome-dialog/welcome-dialog.component';
import { slider } from './animations/route-animations';

const DIALOG_DISPLAY_DELAY = 600;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider]
})
export class AppComponent implements OnInit {
  title = 'we-push';

  navigationStart$: Observable<string>;

  constructor(public dialog: MatDialog, public router: Router) {
    this.navigationStart$ = this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      map(event => (event as NavigationStart).url)
    );
  }

  ngOnInit() {
    setTimeout(() => {
      this.dialog.open(WelcomeDialogComponent, {
        width: '600px'
      });
    }, DIALOG_DISPLAY_DELAY);
  }
}
