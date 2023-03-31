import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '../auth/auth.module';
import { ButtonDateComponent } from './components/button-date/button-date.component';
import { ButtonViewComponent } from './components/button-view/button-view.component';
import { SearchComponent } from './components/search/search.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SortingBlockComponent } from './components/sorting-block/sorting-block.component';
import { ClickSortingService } from './services/click-sorting.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:
    [HeaderComponent,
      NotFoundComponent,
      ButtonDateComponent,
      ButtonViewComponent,
      SearchComponent,
      SettingsComponent,
      SortingBlockComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    AuthModule
  ],
  exports:
    [HeaderComponent,
      NotFoundComponent,
      ButtonDateComponent,
      ButtonViewComponent,
      SearchComponent,
      SettingsComponent,
      SortingBlockComponent],
  providers: [ClickSortingService]
})
export class CoreModule {
}
