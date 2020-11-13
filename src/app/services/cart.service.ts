import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class CartService {
  cart = [];
  total: number = 0;
  totalQuantity: number = 0;

  constructor() {}


  // ============================================= 
  // addProduct not working

  addProduct(product: Product) {
    // if product in cart:
    //   increament Qty
    // this.cart

    this.cart.push(product);
    // console.log(this.cart);
    
  }
  // ================================================
  
  removeProduct(product: Product): void {  
    this.cart.splice(this.cart.lastIndexOf(product), 1)
  }

  cartSize() {
    return this.cart.length;
  }

  totalCartPrice() {
    let sum: number = 0;
    this.cart.forEach((product) => {
      sum += product.price * product.quantity;
    });
    return (this.total = sum);
  }

  totalCartQuantity() {
    let sum: number = 0;
    this.cart.forEach((product) => {
      sum += product.quantity;
    });
    return (this.totalQuantity = sum);
  }
}
