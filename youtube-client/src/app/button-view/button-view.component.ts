import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-view',
  templateUrl: './button-view.component.html',
  styleUrls: ['./button-view.component.scss']
})
export class ButtonViewComponent {
  @Output() sendEmitView = new EventEmitter<unknown>();

  public onSortView(): void {
    this.sendEmitView.emit();
  }
}
