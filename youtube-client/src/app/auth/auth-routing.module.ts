import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { WrongDataComponent } from './pages/wrong-data/wrong-data.component';
import { SuccessComponent } from './pages/success/success.component';
import { AccountComponent } from './pages/account/account.component';
import {MainGuard} from '../core/guards/main-guard.guard';
import {CreateCardComponent} from './pages/create-card/create-card.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'wrong',
    component: WrongDataComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [MainGuard]
  },
  {
    path: 'create',
    component: CreateCardComponent,
    canActivate: [MainGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
