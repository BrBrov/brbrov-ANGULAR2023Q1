import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateSortingService {
  public sortData(data: ResponseData, mode: boolean | string | null): ResponseData {

    const dataArray: DataItem[] = mode ? this.sortASC(data.items) : this.sortDESC(data.items);

    return  {
      'kind': data.kind,
      'etag': data.etag,
      'pageInfo': data.pageInfo,
      'items': dataArray
    };
  }

  private sortDESC(dataArray: DataItem[]): Array<DataItem> {
    return dataArray.sort((data1: DataItem, data2: DataItem) => {
      const time1: number = Date.parse(data1.snippet.publishedAt);
      const time2: number = Date.parse(data2.snippet.publishedAt);
      return time2 - time1;
    });
  }

  private sortASC(dataArray: DataItem[]): Array<DataItem> {
    return dataArray.sort((data1: DataItem, data2: DataItem) => {
      const time1: number = Date.parse(data1.snippet.publishedAt);
      const time2: number = Date.parse(data2.snippet.publishedAt);
      return time1 - time2;
    });
  }

}
