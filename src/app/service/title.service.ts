import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

//move this to environment ts file
  private jsonUrl = environment.jasonServerUrl; 
  private url = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Object> {
    return this.http.get(this.url);
  }
}
