import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttributionsComponent } from '../attributions/attributions.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(
    public dialog: MatDialog,
    public breakpointObserver: BreakpointObserver
  ) {}

  onClick() {
    let height = '24rem';
    let width = 'auto';
    if (this.breakpointObserver.isMatched('(min-width: 600px)')) {
      height = '40rem';
      width = '40rem';
    }
    this.dialog.open(AttributionsComponent, {
      height,
      width
    });
  }
}
