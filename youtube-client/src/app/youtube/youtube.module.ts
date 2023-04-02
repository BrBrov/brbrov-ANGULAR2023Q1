import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { CountSortingService } from './services/count-sorting.service';
import { DateComparsionService } from './services/date-comparsion.service';
import { DateSortingService } from './services/date-sorting.service';
import { LoadDataService } from './services/load-data.service';
import { WordSortingService } from './services/word-sorting.service';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { CardDetailsComponent } from './pages/card-details/card-details.component';

@NgModule({
  declarations: [MainComponent, CardDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    YoutubeRoutingModule,
    NgOptimizedImage
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
