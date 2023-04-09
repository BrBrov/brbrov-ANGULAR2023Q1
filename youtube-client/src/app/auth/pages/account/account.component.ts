import { Component, OnInit } from '@angular/core';
import { LoginSetterService } from '../../../core/services/login-setter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public name: string;

  constructor(private loginEvent: LoginSetterService, private route: Router) { }

  ngOnInit(): void {
    const authData: string = localStorage.getItem('auth');
    if (!authData) {
      this.route.navigate(['fail']);
    } else {
      const token: string = JSON.parse(authData);
      const baseShowing: string = localStorage.getItem('base');
      if (!baseShowing) {
        this.route.navigate(['fail']);
        return;
      }

      const base: AuthData[] = JSON.parse(baseShowing);

      const account: AuthData[] = base.filter((item: AuthData): boolean => String(token) === item.key);

      if (!account.length && account.length > 1) {
        this.route.navigate(['fail']);
      }

      this.name = account[0].name;
    }
  }

  public exit(): void {
    localStorage.removeItem('auth');
    this.loginEvent.onLogin('Your',  'name', false);
    this.route.navigate(['auth/login']);
  }

  public toCreateCard(): void {
    console.log('toCreate');
    this.route.navigate(['auth/create']);
  }
}
