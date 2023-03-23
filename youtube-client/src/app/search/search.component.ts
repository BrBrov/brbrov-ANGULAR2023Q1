import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public placeholder = 'What are you want to find out?';
  public valueSearch: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  public onClick(): void {
    this.searchEvent.emit(this.valueSearch);
  }
}
