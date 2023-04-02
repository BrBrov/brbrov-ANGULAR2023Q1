import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wrong-data',
  templateUrl: './wrong-data.component.html',
  styleUrls: ['./wrong-data.component.scss']
})
export class WrongDataComponent implements OnInit {

  public info = 'Unknown error';

  public link = 'Unknown error';

  private mode: boolean | null = null;

  constructor(private route: Router, private routeData: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeData.queryParams.subscribe((params) => {
      if (!params['error']) this.route.navigate(['fail']);
      switch (params['error']) {
        case 'unauthorized':
          this.info = 'Wrong data!';
          this.link = '...back to login';
          this.mode = false;
          break;
        case 'unregister':
          this.info = 'Account already exists';
          this.link = '...back to registration';
          this.mode = true;
          break;
        default:
          this.info = 'Something went wrong!';
          this.link = '...redirect to main';
          this.mode = null;
          setTimeout(() => this.route.navigate(['main']), 3000);
          break;
      }
    });
  }

  public backLogin(): void {
    if (!this.mode) {
      if (this.mode === null) {
        this.route.navigate(['main']);
      }
      this.route.navigate(['auth/login']);
    } else {
      this.route.navigate(['auth/registration']);
    }
  }
}
