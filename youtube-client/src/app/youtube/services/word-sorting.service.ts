import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordSortingService {

  public sortData(data: Card[], mode: string): Card[] {
    const first: Card[] = [];
    const second: Card[] = [];
    const third: Card[] = [];

    const searchWord: string = mode.toLowerCase();


    data.forEach((item: Card): void => {
      const title: string = item.title.toLowerCase();
      const description: string = item.description.toLowerCase();

      if (title.includes(searchWord)) {
        first.push(item);
      } else if (description.includes(searchWord)) {
        second.push(item);
      } else {
        third.push(item);
      }
    });

    return [...first, ...second, ...third];
  }
}
