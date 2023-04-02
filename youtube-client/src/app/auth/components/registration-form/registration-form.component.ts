import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  public registration: FormGroup;

  @Output() event: EventEmitter<string> = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.registration = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    });
  }

  public onSubmit():void {
    console.log(this.registration);
    const authMetaData: string = localStorage.getItem('auth');
    if (!authMetaData) {
      this.setAccount(this.registration);
      this.sendEvent(this.registration.value.name);
    } else {
      const authData: AuthData = JSON.parse(authMetaData);
      const regData: AuthData = this.registration.value;
      if(regData.mail === authData.mail || regData.name === authData.name || regData.surname === authData.surname) {
        this.sendEvent('');
      } else {
        localStorage.clear();
        this.setAccount(this.registration);
        this.sendEvent(this.registration.value.name);
      }
    }
  }

  public toLogin():void {
    this.route.navigate(['auth/login']);
  }

  private setAccount(data: FormGroup): void {
    const account: AuthData = {
      name: data.value.name,
      surname: data.value.surname,
      mail: data.value.mail,
      password: data.value.password
    }

    localStorage.setItem('auth', JSON.stringify(account));
  }

  private sendEvent(login: string): void {
    this.event.emit(login);
  }
}
