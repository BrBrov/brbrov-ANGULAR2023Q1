import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordCheck } from '../../services/validators.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  public registration: FormGroup;

  @Output() event: EventEmitter<AuthData> = new EventEmitter<AuthData>();

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.registration = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), passwordCheck()]]
    });
  }

  get mailErr(): string {
    const state: AbstractControl = this.registration.get('mail');

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
    const state: AbstractControl = this.registration.get('password');

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
    this.event.emit(this.registration.value as AuthData);
  }

  public toLogin():void {
    this.route.navigate(['auth/login']);
  }
}
