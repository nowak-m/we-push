import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { WelcomeDialogComponent } from './comp/welcome-dialog/welcome-dialog.component';
import { slider } from './animations/route-animations';
import { BreakpointObserver } from '@angular/cdk/layout';

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

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public breakpointObserver: BreakpointObserver
  ) {
    this.navigationStart$ = this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      map(event => (event as NavigationStart).url)
    );
  }

  ngOnInit() {
    setTimeout(() => {
      let width = 'auto';
      if (this.breakpointObserver.isMatched('(min-width: 600px)')) {
        width = '30rem';
      }
      this.dialog.open(WelcomeDialogComponent, {
        width
      });
    }, DIALOG_DISPLAY_DELAY);
  }
}
