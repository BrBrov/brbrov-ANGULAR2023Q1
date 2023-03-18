import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  public request: HttpClient;
  constructor(private httpClient: HttpClient) {
    this.request = httpClient;
  }
}
