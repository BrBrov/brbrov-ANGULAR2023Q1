import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sorting-block',
  templateUrl: './sorting-block.component.html',
  styleUrls: ['./sorting-block.component.scss']
})
export class SortingBlockComponent {
  private mode: boolean | string = 'null';

  private typeMode: string = '';

  public sortString: string = '';

  @Output() sendSort = new EventEmitter<EventData>();
  public onSortDate(): void {
    this.setMode('date');
  }

  public onSortView(): void {
    this.setMode('view');
  }

  public onSortingWord(): void {
    this.mode = this.sortString;
    this.typeMode = 'word';
    this.send();
  }

  private setMode(type: string): void {
    if (this.typeMode !== type) {
      this.mode = 'null';
      this.typeMode = type;
      return;
    }
    switch(this.mode) {
      case 'null':
        this.mode = true;
        break;
      case true:
        this.mode = false;
        break;
      default:
        this.mode = 'null';
        break;
    }
    this.send();
  }

  private send(): void {
    this.sendSort.emit({type: this.typeMode, mode: this.mode});
  }
}
