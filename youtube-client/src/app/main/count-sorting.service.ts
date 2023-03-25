import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountSortingService {

  public sortData(data: ResponseData, mode: boolean | string): ResponseData {
    const newItems: DataItem[] = mode ? this.countASC(data.items) : this.countDESC(data.items);

    return {
      'kind': data.kind,
      'etag': data.etag,
      'pageInfo': data.pageInfo,
      'items': newItems
    };
  }

  private countASC(items: DataItem[]): Array<DataItem> {
    return items.sort((item1: DataItem, item2: DataItem) => {
      return Number(item1.statistics.viewCount) - Number(item2.statistics.viewCount);
    });
  }

  private countDESC(items: DataItem[]): Array<DataItem> {
    return items.sort((item1: DataItem, item2: DataItem) => {
      return Number(item2.statistics.viewCount) - Number(item1.statistics.viewCount);
    });
  }
}
