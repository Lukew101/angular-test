import { Component, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StnButton, StnDatePicker, StnModal } from '@statnett/angular-components';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PickerDialogComponent } from './picker-dialog/picker-dialog.component';
import { DatePickerModalComponent } from './date-picker-modal/date-picker-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StnButton, StnDatePicker, MatDialogModule, MatSlideToggleModule, MatProgressBarModule, PickerDialogComponent, DatePickerModalComponent, StnModal],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app-2';
  open = false;

  constructor(public dialog: MatDialog) {}

  openDatePickerDialog(): void {
    const dialogRef = this.dialog.open(PickerDialogComponent, {
      width: '250px',
      autoFocus: false,
      restoreFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openModal(): void {
    this.open = true;
    console.log(this.open)
  }

  closeModal(): void {
    this.open = false;
    console.log(this.open)
  }
}
