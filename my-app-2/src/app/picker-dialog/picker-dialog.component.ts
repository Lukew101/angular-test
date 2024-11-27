import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { StnDatePicker, StnDateRangePicker, StnDateTimePicker, StnModal, StnTimePicker, StnTimeRangePicker } from '@statnett/angular-components';

@Component({
  selector: 'app-picker-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, StnDatePicker, StnDateRangePicker, StnDateTimePicker, StnTimePicker, StnTimeRangePicker],
  templateUrl: './picker-dialog.component.html',
  styleUrls: ['./picker-dialog.component.scss']
})
export class PickerDialogComponent {
  selectedDate: any;

  constructor(public dialogRef: MatDialogRef<PickerDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}