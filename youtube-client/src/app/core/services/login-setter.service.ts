import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSetterService {

  private observer: Subject<AccountEvent> = new Subject<AccountEvent>();

  public emit: Observable<any> = this.observer.asObservable();

  public onLogin(login: string, exit: boolean): void {
    const accEv: AccountEvent = {
      name: login,
      ev: exit
    }
    this.observer.next(accEv);
  }
}
