import { Injectable } from '@angular/core';
import { Observable, of, from, Subject } from 'rxjs';
import { Product } from '../models/product';


@Injectable()
export class CartService {

  cart: Product[] = [];
  total: number = 0;

  constructor() {}

  addProduct(product: Product) {
    this.cart.push(product);
    console.log('cart has items -> ' + this.cart.length);
    console.log('added product -> ' + JSON.stringify(product));
  }

  removeProduct(product: Product): void {
    this.cart = this.cart.filter(item => item !== product);
  }

  cartSize() {
    return this.cart.length;
  }

  totalCartPrice() {
    let sum: number = 0;
    this.cart.forEach(product => sum += product.price);
    return this.total = sum;
  }
}
