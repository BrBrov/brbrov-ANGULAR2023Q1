import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  private value = false;

  @Output() mode: EventEmitter<boolean> = new EventEmitter<boolean>();

  public listen(): void {
    this.value = !this.value;
    this.mode.emit(this.value);
  }
}
