import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { StnDatePicker, StnModal } from '@statnett/angular-components';

@Component({
  selector: 'app-picker-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, StnDatePicker],
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