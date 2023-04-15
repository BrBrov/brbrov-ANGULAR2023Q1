import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountSortingService {

  public sortData(data: Card[], mode: boolean | string): Card[] {
    return mode ? this.countASC(data) : this.countDESC(data);
  }

  private countASC(items: Card[]): Card[] {
    return items.sort((item1: Card, item2: Card) => {
      return Number(item1.view) - Number(item2.view);
    });
  }

  private countDESC(items: Card[]): Card[] {
    return items.sort((item1: Card, item2: Card) => {
      return Number(item2.view) - Number(item1.view);
    });
  }
}
