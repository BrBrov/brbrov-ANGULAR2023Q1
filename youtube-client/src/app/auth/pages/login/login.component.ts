import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginSetterService} from '../../../core/services/login-setter.service';
import {AuthService} from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private route: Router, private loginEvent: LoginSetterService, private authHandler: AuthService) {}

  public showInfo(ev: AuthData):void {
    const result: string = this.authHandler.checkLoginData(ev);

    if (!result) {
      this.route.navigate(['auth/wrong'], {queryParams: {error: 'unauthorized'}});
    } else {
      this.loginEvent.onLogin(result, true);
      this.route.navigate(['auth/success'], {queryParams:{name: result}});
    }
  }
}
