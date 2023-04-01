import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wrong-data',
  templateUrl: './wrong-data.component.html',
  styleUrls: ['./wrong-data.component.scss']
})
export class WrongDataComponent {

  constructor(private route: Router) {}

  public backLogin(): void {
    this.route.navigate(['auth/login']);
  }
}
