import {Component, OnInit} from '@angular/core';
import {LoginSetterService} from '../../../core/services/login-setter.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{
  public name: string;

  constructor(private loginEvent: LoginSetterService, private route: Router) { }

  ngOnInit(): void {
    const authData: string = localStorage.getItem('auth');
    if (!authData) {
      this.route.navigate(['fail']);
    } else {
      const auth: AuthData = JSON.parse(authData);
      this.name = auth.name;
    }
  }

  public exit(): void {
    localStorage.clear();
    this.loginEvent.onLogin('Your name', false);
    this.route.navigate(['auth/login']);
  }
}
