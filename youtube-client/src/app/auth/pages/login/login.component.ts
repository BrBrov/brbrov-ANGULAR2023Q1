import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginSetterService} from '../../../core/services/login-setter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private route: Router, private loginEvent: LoginSetterService) {}

  public showInfo(ev: string):void {

    if (!ev) {
      this.route.navigate(['auth/wrong'], {queryParams: {error: 'unauthorized'}});
    } else {
      this.loginEvent.onLogin(ev, true);
      this.route.navigate(['auth/success'], {queryParams:{name: ev}});
    }
  }
}
