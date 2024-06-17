import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products!: Observable<Product[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.products = this.store.select(state => state.product)
    console.log(this.products)
  }

  addProduct(name:any, price:any){
    this.store.dispatch({type:'ADD_PRODUCT',
      payload: <Product>{
        name: name,
        price: price
      }
    })
  }

}
