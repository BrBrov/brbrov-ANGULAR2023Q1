import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public title = 'Video';
  public colorBottom = '#FFFFF';
  public imgRef: string = '';
  setTitle(title: string, color: string, img: string): void {
    this.title = title;
    this.colorBottom = color;
    this.imgRef = img;
  }
}
