import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickSortingService } from './core/services/click-sorting.service';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { LoginSetterService } from './core/services/login-setter.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {YoutubeEffect} from './redux/effects/youtube.effect';
import { reducers} from './redux/reducers/map.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    YoutubeModule,
    SharedModule,
    AuthModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([YoutubeEffect])
  ],
  bootstrap: [AppComponent],
  providers: [ClickSortingService, LoginSetterService]
})

export class AppModule {}
