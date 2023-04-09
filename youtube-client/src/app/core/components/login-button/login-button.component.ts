import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSetterService } from '../../services/login-setter.service';
import { AuthService } from '../../../auth/services/auth-service.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {
  public login = 'Your login';

  private mode = false;

  constructor(private route: Router, private loginEvent: LoginSetterService, private authHandler: AuthService) {}

  ngOnInit(): void {

    if (this.authHandler.checkAuthorization()) {
      const authData: AuthData = this.authHandler.getAccount();

      this.login = authData.name + ' ' + authData.surname;
      this.mode = true;

    } else {
      this.login = 'Your login';
      this.mode = false;
    }

    this.loginEvent.emit.subscribe((param: AccountEvent): void => {
      this.login = param.name + ' ' + param.surname;
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
