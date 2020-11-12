import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class CartService {
  cart: Product[] = [];
  total: number = 0;
  totalQuantity: number = 0;

  constructor() {}

  addProduct(product: Product) {
    this.cart.push(product);
  }

  removeProduct(product: Product): void {
    this.cart = this.cart.filter((item) => item !== product);
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
