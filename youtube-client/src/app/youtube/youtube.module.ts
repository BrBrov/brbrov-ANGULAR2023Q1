import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import {CountSortingService} from './services/count-sorting.service';
import {DateComparsionService} from './services/date-comparsion.service';
import {DateSortingService} from './services/date-sorting.service';
import {LoadDataService} from './services/load-data.service';
import {WordSortingService} from './services/word-sorting.service';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [MainComponent],
  providers: [
    CountSortingService,
    DateComparsionService,
    DateSortingService,
    LoadDataService,
    WordSortingService]
})
export class YoutubeModule {}
