import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public placeholder = 'What are you want to find out?';

  public valueSearch = '';

  @Output() searchEvent = new EventEmitter<EventData>();

  public onClick(): void {
    this.searchEvent.emit({ type: 'search', mode: this.valueSearch });
  }
}
