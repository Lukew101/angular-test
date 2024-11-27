import { Component, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StnButton, StnDatePicker } from '@statnett/angular-components';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PickerDialogComponent } from './picker-dialog/picker-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StnButton, StnDatePicker, MatDialogModule, MatSlideToggleModule, MatProgressBarModule, PickerDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app-2';

  constructor(public dialog: MatDialog) {}

  openDatePickerDialog(): void {
    const dialogRef = this.dialog.open(PickerDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Selected date:', result);
    });
  }
}
