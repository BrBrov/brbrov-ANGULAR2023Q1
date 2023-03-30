import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {YoutubeModule} from '../youtube/youtube.module';
import {AuthModule} from '../auth/auth.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, MainComponent, NotFoundComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    YoutubeModule,
    AuthModule
  ],
  exports: [HeaderComponent, MainComponent, NotFoundComponent]
})
export class CoreModule { }
