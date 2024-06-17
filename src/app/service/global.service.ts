import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const  baseUrl = 'http://localhost:8080/api/'
const httpOptions : any = {
  headers: new HttpHeaders({
   // 'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(private http: HttpClient) { }

  // getWelcomeDtls() {
  //   return this.http.get(baseUrl + 'welcome',{responseType: 'text'});
  // }
  getWelcomeDtls() {
    return this.http.get(baseUrl + 'welcome',{responseType: 'text'});
  }
}
