import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeDialogComponent } from './comp/welcome-dialog/welcome-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'we-push';

  displayRouter = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    const dialogRef = this.dialog.open(WelcomeDialogComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.displayRouter = true;
    });
  }
}
