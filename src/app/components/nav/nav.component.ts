import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, DoCheck {

  cartItems;

  constructor(private cartService: CartService,
              private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.cart;
  }

  checkout() {
    this.router.navigateByUrl('/checkout');
  }

  ngDoCheck() {
    this.cartItems = this.cartService.cart;
  }
  getCartSize() {
    return this.cartService.cartSize();
  }
  
  getTotalPrice() {
    return this.cartService.totalCartPrice();
  }
}
