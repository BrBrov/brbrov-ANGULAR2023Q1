import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LoginSetterService} from '../../../core/services/login-setter.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(private route: Router, private setLogin: LoginSetterService) {
  }

  public onEvent(ev: string): void {
    if(!ev) {
      this.route.navigate(['auth/wrong'], {queryParams: {error: 'unregister'}});
    } else {
      this.setLogin.onLogin(ev, true);
      this.route.navigate(['auth/success'], {queryParams:{name: ev}});
    }
  }
}
