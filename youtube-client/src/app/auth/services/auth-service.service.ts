import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private authData: AuthData;

  private base: Array<AuthData>;

  public checkRegistrationData(data: AuthData): string {
    const baseShowing: string = localStorage.getItem('base');
    if (!baseShowing) {
      this.base = [];
      this.setData(data);
      return this.authData.name;
    } else {
      this.base = JSON.parse(localStorage.getItem('base'));

      const result: boolean = this.base.some((item: AuthData): boolean => {
        if (data.name === item.name && data.surname === item.surname) return true;
      })
      console.log(result);
      if (result) return '';
      this.setData(data);
      return this.authData.name;
    }
  }

  public checkLoginData(data: AuthData): string {
    console.log(data);
    const baseShowing = localStorage.getItem('base');
    if (!baseShowing) return '';

    const base: AuthData[] = JSON.parse(baseShowing);

    const result: AuthData[] = base.filter((item: AuthData) : boolean => {
      if (item.name === data.name && item.surname === data.surname && item.password === data.password) {
        return true;
      }
    });

    if (!result.length || result.length > 1) return '';

    localStorage.setItem('auth', result[0].key);
    return result[0].name;
  }

  private generateToken(): string {
    const arr: Uint8Array = new Uint8Array(4);
    const keyArr: Uint8Array = window.crypto.getRandomValues(arr);
    return keyArr.join('');
  }

  private setData(data: AuthData): void {
    data.key = this.generateToken();
    this.authData = data;
    this.base.push(this.authData);
    localStorage.setItem('base', JSON.stringify(this.base));
    localStorage.setItem('auth', data.key);
  }
}
