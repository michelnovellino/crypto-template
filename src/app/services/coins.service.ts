import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  env = environment;
  constructor(private http: HttpClient) { }
  getCoins() {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

      })
    return this.http.get(
      this.env.apiUrl + "/public/asset-service/product/get-products ",
      { headers: headers }
    )
  }
}
