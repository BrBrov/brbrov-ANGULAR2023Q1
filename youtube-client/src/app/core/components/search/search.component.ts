import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public placeholder = 'What are you want to find out?';

  public valueSearch = '';

  constructor(private router: Router) {
  }

  public onClick(): void {
    this.router.navigate(['main'], { queryParams: { search: this.valueSearch } });
  }
}
