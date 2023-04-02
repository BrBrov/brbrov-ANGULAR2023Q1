import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {LoginSetterService} from '../../services/login-setter.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit{
  public login: string = 'Your login';

  private mode: boolean = false;

  constructor(private route: Router, private loginEvent: LoginSetterService) {}

  ngOnInit(): void {
    const authData: string = localStorage.getItem('auth');
    if (authData) {
      const account:AuthData = JSON.parse(authData);
      this.login = account.name;
      this.mode = true
    } else {
      this.login = 'Your login';
      this.mode = false;
    }
    this.loginEvent.emit.subscribe((param) => {
      this.login = param.name;
      this.mode = param.ev;
    });
  }

  public openLogin(): void {
    if (!this.mode) {
      this.route.navigate(['auth/login']);
    } else {
      this.route.navigate(['auth/account']);
    }
  }
}
