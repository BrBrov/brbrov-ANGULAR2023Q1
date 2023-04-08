import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { passwordCheck } from '../../services/validators.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public formLogin: FormGroup;


  @Output() eventSender: EventEmitter<AuthData> = new EventEmitter<AuthData>();

  constructor(private buildForm: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.formLogin = this.buildForm.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), passwordCheck()]]
    });
  }

  get mailErr(): string {
    const state: AbstractControl = this.formLogin.get('login');

    if (state.errors === null) {
      return '';
    }

    if (state.errors['required']) {
      return 'Please enter a login email';
    }

    if (state.errors['email']) {
      return 'The login email is invalid';
    }
  }

  get passErr(): string {
    const state: AbstractControl = this.formLogin.get('password');

    if (state.errors === null) {
      return '';
    }

    if (state.errors['required']) {
      return 'Please enter a password';
    }

    if (state.errors['minlength']) {
      return 'Your password isn\'t strong enough. Password must be at least 8 characters';
    }

    if (state.errors['low']) {
      return 'Password must contain uppercase characters';
    }

    if (state.errors['up']) {
      return 'Password must contain lowercase characters';
    }

    if (state.errors['number']) {
      return ' Password must contain numbers';
    }

    if (state.errors['special']) {
      return 'Password must contain special characters';
    }
  }

  public onSubmit(): void {

    const authData: AuthData = {
      name: '',
      surname: '',
      mail: this.formLogin.value.login,
      password: this.formLogin.value.password
    };
    this.eventSender.emit(authData);
  }

  public toRegistration():void {
    this.route.navigate(['auth/registration']);
  }
}
