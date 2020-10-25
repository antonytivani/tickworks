import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  cartItems;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.cart;
  }

  getCartSize() {
    return this.cartService.cartSize();
  }
  
  getTotalPrice() {
    return this.cartService.totalCartPrice();
  }
}
