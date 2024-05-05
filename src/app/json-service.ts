import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./product";
import { Observable } from "rxjs/internal/Observable";
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class JsonService{

    private apiServer = "http://localhost:3000";

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }

      constructor(private httpClient: HttpClient) { }

      public addProduct(product: any): Observable<Product> {
        return this.httpClient.post<Product>(this.apiServer + '/products/', JSON.stringify(product), 
        this.httpOptions).pipe(
            catchError(this.errorHandler)
        )
       
      } 

      public addOtherProduct(product: any): Observable<Product> {
        return this.httpClient.post<Product>(this.apiServer + '/productRemoved/', JSON.stringify(product), 
        this.httpOptions).pipe(
            catchError(this.errorHandler)
        )
       
      } 

      public removeProduct(id: number) {
        return this.httpClient.delete<Product>(this.apiServer + `/products/${id}`).pipe(
            catchError(this.errorHandler)
        )
       
      } 
      public removeOtherProduct(id: number) {
        return this.httpClient.delete<Product>(this.apiServer + `/productRemoved/${id}`).pipe(
            catchError(this.errorHandler)
        )
       
      } 
      getAll(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.apiServer + '/products/')
        .pipe(
          catchError(this.errorHandler)
        )
      }

      getAllOtherProdcuts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.apiServer + '/productRemoved/')
        .pipe(
          catchError(this.errorHandler)
        )
      }
      
      errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message || "server error.");
    }
}
