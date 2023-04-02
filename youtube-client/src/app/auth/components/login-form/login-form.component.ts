import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public formLogin: FormGroup;

  @Output() event: EventEmitter<AuthData> = new EventEmitter<AuthData>();

  constructor(private buildForm: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.formLogin = this.buildForm.group({
      login: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public onSubmit(): void {
    const arrData: string[] = this.formLogin.value.login.split(' ');
    if (arrData.length < 2) {
      this.toWrong();
      return;
    }
    const authData: AuthData = {
      name: arrData[0],
      surname: arrData[1],
      mail: '',
      password: this.formLogin.value.password
    };
    this.event.emit(authData);
  }

  public toRegistration():void {
    this.route.navigate(['auth/registration']);
  }

  private toWrong(): void {
    this.route.navigate(['auth/wrong'], { queryParams: { error: 'unauthorized' } });
  }
}
