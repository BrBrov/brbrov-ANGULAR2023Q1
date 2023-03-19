import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { SortingBlockComponent } from './sorting-block/sorting-block.component';
import { MainComponent } from './main/main.component';
import {LoadDataService} from './load-data.service';
import { CardComponent } from './card/card.component';
import { SocialComponent } from './social/social.component';

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
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoadDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
