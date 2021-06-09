import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as config from '../../auth_config.json';
import { ENAMETOOLONG } from 'constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  ping$(): Observable<any> {
    console.log(config.apiUri);
    return this.http.get(`${config.apiUri}/api/external`);
  }

  placeOrder$(pizzaname?): Observable<any> {
    console.log(config.apiUri);
    pizzaname = pizzaname ? pizzaname : 'elon';
    return this.http.get(`${config.apiUri}/api/placeorder?pizza=`+pizzaname);
  }

  userOrders$(): Observable<any> {
    console.log(config.apiUri);
    return this.http.get(`${config.apiUri}/api/userorders`);
  }
}
