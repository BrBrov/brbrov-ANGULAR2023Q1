import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import {CardDetailsComponent} from './pages/card-details/card-details.component';

const route: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'card',
    component: CardDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
