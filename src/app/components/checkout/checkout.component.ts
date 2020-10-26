import { Component, OnInit, ElementRef, HostListener, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Subject, Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckOutComponent implements OnInit, AfterViewInit  {

  elements: Product[] = [];
  headElements = ['Product name',  'Quantity', 'Price', 'Remove'];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.elements = this.cartService.cart;
    // console.log('Products on invoice -> ' + JSON.stringify(this.elements));
  }

  ngAfterViewInit() {
    this.elements = this.cartService.cart;
    // console.log('### After view cart is -> ' + this.elements);
  }

  removeProductFromCart(product: Product) {
    this.cartService.removeProduct(product);
    this.elements = this.cartService.cart;
  }
}
