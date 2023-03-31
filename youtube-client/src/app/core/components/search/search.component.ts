import { Component } from '@angular/core';
import { ClickSortingService } from '../../services/click-sorting.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public placeholder = 'What are you want to find out?';

  public valueSearch = '';

  constructor(private click: ClickSortingService) {
  }

  public onClick(): void {
    this.click.onSorting({ type: 'search', mode: this.valueSearch });
  }
}
