import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, fromEvent, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit, OnDestroy {
  public readonly placeholder: string = 'What are you want to find out?';

  public valueSearch = '';

  @ViewChild('inputData', { read: ElementRef }) private input: ElementRef;

  private observer: Subscription;

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    this.observer = fromEvent(this.input.nativeElement, 'input').pipe(
      tap((ev) => {
        if (ev) this.valueSearch = this.input.nativeElement.value;
      }),
      debounceTime(500)
    ).subscribe((): void => {
      if (this.valueSearch.length > 2) this.onClick();
    });
  }

  ngOnDestroy(): void {
    this.observer.unsubscribe();
  }

  public onClick(): void {
    this.router.navigate(['main'], { queryParams: { search: this.valueSearch } });
  }


}
