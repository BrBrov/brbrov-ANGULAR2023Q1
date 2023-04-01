import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ButtonDateComponent } from './components/button-date/button-date.component';
import { ButtonViewComponent } from './components/button-view/button-view.component';
import { SearchComponent } from './components/search/search.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SortingBlockComponent } from './components/sorting-block/sorting-block.component';
import { FormsModule } from '@angular/forms';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations:
    [HeaderComponent,
      NotFoundComponent,
      ButtonDateComponent,
      ButtonViewComponent,
      SearchComponent,
      SettingsComponent,
      SortingBlockComponent,
      LoginButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
    NgOptimizedImage
  ],
  exports:
    [HeaderComponent]
})
export class CoreModule {
}
