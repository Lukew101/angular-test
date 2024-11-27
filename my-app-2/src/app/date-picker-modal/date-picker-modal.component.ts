import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StnButton, StnDatePicker, StnModal, StnDateRangePicker, StnDateTimePicker, StnTimePicker, StnTimeRangePicker } from '@statnett/angular-components';

@Component({
  selector: 'app-date-picker-modal',
  standalone: true,
  imports: [StnDatePicker, StnButton, StnModal, StnButton, StnDatePicker, StnDateRangePicker, StnDateTimePicker, StnTimePicker, StnTimeRangePicker],
  templateUrl: './date-picker-modal.component.html',
  styleUrl: './date-picker-modal.component.scss'
})
export class DatePickerModalComponent {
  @Input() open = false;
  @Output() close = new EventEmitter<void>();
  selectedDate: any;

  closeModal(): void {
    this.open = false;
    this.close.emit();
    console.log(this.open)
  }

  openModal(): void {
    this.open = true;
    console.log(this.open)
  }
}
