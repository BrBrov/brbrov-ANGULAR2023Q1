import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { WrongDataComponent } from './pages/wrong-data/wrong-data.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { SuccessComponent } from './pages/success/success.component';
import { AccountComponent } from './pages/account/account.component';
import { AuthService } from './services/auth-service.service';
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { CardCreateComponent } from './components/card-create/card-create.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    WrongDataComponent,
    SuccessComponent,
    AccountComponent,
    CreateCardComponent,
    CardCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule],
  providers: [AuthService],
  exports: [LoginComponent]
})
export class AuthModule { }
