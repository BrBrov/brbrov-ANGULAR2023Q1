import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-date',
  templateUrl: './button-date.component.html',
  styleUrls: ['./button-date.component.scss']
})
export class ButtonDateComponent {
  @Output() sendEmitDate: EventEmitter<void> = new EventEmitter<void>();

  public onSortDate(): void {
    this.sendEmitDate.emit();
  }
}
