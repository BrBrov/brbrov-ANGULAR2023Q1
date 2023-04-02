import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  public name = 'User';

  constructor(private route: Router, private routeState: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeState.queryParams.subscribe((param) => {
      if (!param['name']) {
        this.route.navigate(['fail']);
      } else {
        this.name = param['name'];
        setTimeout(() => this.redirect(), 3000);
      }
    });
  }

  public redirect(): void {
    this.route.navigate(['main']);
  }
}
