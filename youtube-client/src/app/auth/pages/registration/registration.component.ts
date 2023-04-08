import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSetterService } from '../../../core/services/login-setter.service';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(private route: Router, private setLogin: LoginSetterService, private authHandler: AuthService) {
  }

  public onEvent(ev: AuthData): void {
    const result: string = this.authHandler.checkRegistrationData(ev);

    if (!result) {
      this.route.navigate(['auth/wrong'], { queryParams: { error: 'unregister' } });
    } else {
      const arrEnteredData: string[] = result.split(' ');
      this.setLogin.onLogin( arrEnteredData[0], arrEnteredData[1], true);
      this.route.navigate(['auth/success'], { queryParams:{ name: result } });
    }
  }
}
