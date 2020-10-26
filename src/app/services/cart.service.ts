import { Injectable } from '@angular/core';
import { Product } from '../models/product';


@Injectable()
export class CartService {

  cart: Product[] = [];
  total: number = 0;

  constructor() {}

  addProduct(product: Product) {
    this.cart.push(product);
    // console.log('cart has items -> ' + this.cart.length);
    // console.log('added product -> ' + JSON.stringify(product));
  }

  removeProduct(product: Product): void {
    // console.log('product to remove ' + JSON.stringify(product));
    // console.log('before cart size ' + this.cartSize());
    this.cart = this.cart.filter(item => item !== product);
    // console.log('New cart items ' + JSON.stringify(this.cart));
    // console.log('after cart size ' + this.cartSize());
  
  }

  cartSize() {
    return this.cart.length;
  }

  totalCartPrice() {
    let sum: number = 0;
    this.cart.forEach(product => {
      sum += (product.price * product.quantity);
      // console.log('###  calculate Product => ' + JSON.stringify(product));
    });
    return this.total = sum;
  }
}
