import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public formLogin: FormGroup;

  @Output() event: EventEmitter<string> = new EventEmitter<string>();

  constructor(private buildForm: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.formLogin = this.buildForm.group({
      login: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public onSubmit(): void {
    console.log(this.formLogin.valid);
    const localData: string = localStorage.getItem('auth');
    if (!localData) {
      this.event.emit('');
    } else {

      const authData: AuthData = JSON.parse(localData);
      const login: string[] = [authData.name, authData.surname];
      const enterLogin: string[] = this.formLogin.value.login.split(' ');

      if (login.length !== enterLogin.length) {
        this.toWrong();
        return;
      }
      const check: boolean = enterLogin.every((item: string) => login.includes(item));
      if (!check) {
        this.toWrong();
        return;
      }
      if (this.formLogin.value.password !== authData.password) {
        this.toWrong();
        return;
      }
      this.event.emit(authData.name);
    }
  }

  public toRegistration():void {
    this.route.navigate(['auth/registration']);
  }

  private toWrong(): void {
    this.route.navigate(['auth/wrong'], {queryParams: {error: 'unauthorized'}});
  }
}
