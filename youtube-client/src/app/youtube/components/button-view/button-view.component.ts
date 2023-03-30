import { Component } from '@angular/core';
import { ClickSortingService } from '../../../core/services/click-sorting.service';

@Component({
  selector: 'app-button-view',
  templateUrl: './button-view.component.html',
  styleUrls: ['./button-view.component.scss']
})
export class ButtonViewComponent {
  private data: EventData = {
    type: 'date',
    mode: 'null'
  };

  constructor(private click: ClickSortingService) {
  }

  public onSortView(): void {
    this.setMode();
    this.click.onSorting(this.data);
  }

  private setMode(): void {
    switch (this.data.mode) {
      case true:
        this.data.mode = false;
        break;
      case false:
        this.data.mode = 'null';
        break;
      default:
        this.data.mode = true;
        break;
    }
  }
}
