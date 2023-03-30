import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SearchComponent } from './youtube/components/search/search.component';
import { SettingsComponent } from './youtube/components/settings/settings.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SortingBlockComponent } from './youtube/components/sorting-block/sorting-block.component';
import { MainComponent } from './core/components/main/main.component';
import { CardComponent } from './shared/components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { ButtonDateComponent } from './youtube/components/button-date/button-date.component';
import { ButtonViewComponent } from './youtube/components/button-view/button-view.component';
import { ClickSortingService } from './core/services/click-sorting.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SettingsComponent,
    LoginComponent,
    SortingBlockComponent,
    MainComponent,
    CardComponent,
    NotFoundComponent,
    ButtonDateComponent,
    ButtonViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [ClickSortingService]
})
export class AppModule {}
