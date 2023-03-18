import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {LoadDataService} from '../load-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  public data: ResponseData;
  constructor(private service: LoadDataService, private factory: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.service.request.get('../../assets/response.json').subscribe((response) => {
      this.data = response as ResponseData;
      console.log(this.data);
    });
  }
}
