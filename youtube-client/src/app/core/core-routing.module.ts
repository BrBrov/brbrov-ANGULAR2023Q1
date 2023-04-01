import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';

const route: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
