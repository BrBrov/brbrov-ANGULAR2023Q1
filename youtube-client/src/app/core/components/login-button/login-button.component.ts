import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSetterService } from '../../services/login-setter.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {
  public login = 'Your login';

  private mode = false;

  constructor(private route: Router, private loginEvent: LoginSetterService) {}

  ngOnInit(): void {
    const authData: string = localStorage.getItem('auth');
    if (authData) {
      const baseShowing: string = localStorage.getItem('base');
      if (!baseShowing) {
        this.route.navigate(['auth/login']);
        return;
      }

      const base:AuthData[] = JSON.parse(baseShowing);
      const token: string = JSON.parse(authData);
      const account: AuthData[] = base.filter((data: AuthData): boolean => {
        if (data.key === String(token)) return true;
      });

      if (!account[0].key) {
        this.route.navigate(['fail']);
        return;
      } else {
        this.login = account[0].name;
        this.mode = true;
      }
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
