import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  constructor(private httpClient: HttpClient) {}

  public getData() {
    return this.httpClient.get('../../assets/response.json');
  }
}
