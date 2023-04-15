import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateSortingService {
  public sortData(data: Card[], mode: boolean | string | null): Card[] {

    return mode ? this.sortASC(data) : this.sortDESC(data);
  }

  private sortDESC(dataArray : Card[]): Card[] {
    return dataArray.sort((data1: Card, data2: Card) => {
      const time1: number = Date.parse(data1.date);
      const time2: number = Date.parse(data2.date);
      return time2 - time1;
    });
  }

  private sortASC(dataArray: Card[]): Card[] {
    return dataArray.sort((data1: Card, data2: Card) => {
      const time1: number = Date.parse(data1.date);
      const time2: number = Date.parse(data2.date);
      return time1 - time2;
    });
  }

}
