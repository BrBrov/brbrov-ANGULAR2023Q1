import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickSortingService {

  private observer: Subject<EventData> = new Subject<EventData>();

  public emit: Observable<EventData> = this.observer.asObservable();

  public onSorting(ev: EventData): void {
    this.observer.next(ev);
  }
}
