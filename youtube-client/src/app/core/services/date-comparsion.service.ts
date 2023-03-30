import { Injectable } from '@angular/core';

enum Periods {
  HalfYear = 15778800,
  Month = 2678400,
  Week = 604800
}

@Injectable({
  providedIn: 'root'
})
export class DateComparsionService {
  private colors: Array<string> = ['#2F80ED', '#27AE60', '#EB5757', '#F2C94C'];

  public comparsionDate(dateNow: string, datePublish: string): string {
    const now = Date.parse(dateNow);
    const publish = Date.parse(datePublish);

    const secondsDiv  = (now - publish) / 1000;

    if (secondsDiv > Periods.HalfYear) {
      return this.colors[2];
    }
    if (secondsDiv <= Periods.HalfYear && secondsDiv >= Periods.Month) {
      return this.colors[3];
    }
    if (secondsDiv < Periods.Month && secondsDiv >= Periods.Week) {
      return this.colors[1];
    }
    return this.colors[0];
  }
}
