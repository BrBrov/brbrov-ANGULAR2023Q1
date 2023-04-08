import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authData: AuthData;

  private base: Array<AuthData>;

  public checkRegistrationData(data: AuthData): string {

    if (!this.checkBase()) {
      this.base = [];
      this.setData(data);
      return this.authData.name;
    } else {

      const result: boolean = this.base.some((item: AuthData): boolean => {
        if (data.mail === item.mail) return true;
      });
      if (result) return '';
      this.setData(data);
      return this.authData.name + ' ' + this.authData.surname;
    }
  }

  public checkLoginData(data: AuthData): string {
    if (!this.checkBase()) return '';

    const result: AuthData = this.base.find((item: AuthData) : boolean => {
      if (item.mail === data.mail && String(item.password) === String(data.password)) {
        return true;
      }
    });

    if (!result) return '';

    localStorage.setItem('auth', result.key);
    return result.name + ' ' +result.surname;
  }

  public checkAuthorization(): boolean {
    const authToken: string = localStorage.getItem('auth');
    if (authToken) {
      if (!this.checkBase()) {
        return false;
      }
      const token = JSON.parse(authToken);
      this.authData = this.base.find((data: AuthData): boolean => {
        if (data.key === String(token)) return true;
      });

      if (!this.authData.mail) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  public getAccount(): AuthData {
    if (this.checkBase()) {
      const token = JSON.parse(localStorage.getItem('auth'));
      return this.base.find((item: AuthData): boolean => item.key === String(token));
    } else {
      return { key: '', mail: '', name: '', password: '', surname: '' };
    }
  }

  private checkBase(): boolean {
    const baseShowing: string = localStorage.getItem('base');

    if (!baseShowing) return false;

    this.base = JSON.parse(localStorage.getItem('base'));
    return true;
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
