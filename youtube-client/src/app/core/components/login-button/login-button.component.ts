import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent {
  public login: string = 'Your login';

  constructor(private route: Router) {}

  public openLogin(): void {
    console.log(this.route);
    this.route.navigate(['auth/login'], {});
  }
}
