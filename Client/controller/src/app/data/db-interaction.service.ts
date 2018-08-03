import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class DbInteractionService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get<any>('https://s3-us-west-2.amazonaws.com/sj-placement-content/components.json');
  }
}
