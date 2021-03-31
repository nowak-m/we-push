import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { WelcomeDialogComponent } from './comp/welcome-dialog/welcome-dialog.component';
import { slider } from './animations/route-animations';

const getRouterOutletState = (outlet: RouterOutlet) =>
  outlet.isActivated ? outlet.activatedRoute : '';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider]
})
export class AppComponent implements OnInit {
  title = 'we-push';

  outlet!: RouterOutlet;

  getRouterOutletState;

  constructor(public dialog: MatDialog) {
    this.getRouterOutletState = getRouterOutletState;
  }

  ngOnInit() {
    setTimeout(() => {
      this.dialog.open(WelcomeDialogComponent, {
        width: '600px'
      });
    }, 600);
  }
}
