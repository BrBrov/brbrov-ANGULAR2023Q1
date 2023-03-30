import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './components/search/search.component';
import {SettingsComponent} from './components/settings/settings.component';
import {SortingBlockComponent} from './components/sorting-block/sorting-block.component';
import {ButtonDateComponent} from './components/button-date/button-date.component';
import {ButtonViewComponent} from './components/button-view/button-view.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SearchComponent,
    SettingsComponent,
    SortingBlockComponent,
    ButtonDateComponent,
    ButtonViewComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchComponent,
    SettingsComponent,
    SortingBlockComponent,
    ButtonDateComponent,
    ButtonViewComponent]
})
export class YoutubeModule {
}
