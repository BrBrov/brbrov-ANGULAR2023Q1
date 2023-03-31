import { Component } from '@angular/core';
import { ClickSortingService } from '../../services/click-sorting.service';

@Component({
  selector: 'app-sorting-block',
  templateUrl: './sorting-block.component.html',
  styleUrls: ['./sorting-block.component.scss']
})
export class SortingBlockComponent {
  public data: EventData = {
    type: 'word',
    mode: ''
  };

  constructor(private click: ClickSortingService) {
  }

  public onEnter(): void {
    this.click.onSorting(this.data);
  }
}
