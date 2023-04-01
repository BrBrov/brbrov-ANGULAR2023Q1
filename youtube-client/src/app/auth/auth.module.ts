import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import {WrongDataComponent} from './components/wrong-data/wrong-data.component';
import {RegistrationFormComponent} from './components/registration-form/registration-form.component';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, LoginFormComponent, RegistrationFormComponent, WrongDataComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  exports: [LoginComponent]
})
export class AuthModule { }
