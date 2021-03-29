import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttributionsComponent } from '../attributions/attributions.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public dialog: MatDialog) {}

  displayAttributions() {
    const dialogRef = this.dialog.open(AttributionsComponent, {
      height: '70vh'
    });
  }
}
