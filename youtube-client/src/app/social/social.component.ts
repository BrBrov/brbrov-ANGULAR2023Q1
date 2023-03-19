import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  @Input() viewCount: number = 0;
  @Input() likes: number = 0;
  @Input() dislikes: number = 0;
  @Input() comments: number = 0;
}
