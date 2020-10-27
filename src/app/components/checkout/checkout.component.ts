import { Component, OnInit, ElementRef, HostListener, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

import { Product } from 'src/app/models/product';

declare let Email: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckOutComponent implements OnInit, AfterViewInit  {

  elements: Product[] = [];
  headElements = ['Product name',  'Quantity', 'Price', 'Remove'];

  fullname;
  contact;
  address;
  clientEmail;
  message;
  comment;
  subject = 'Order';

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.elements = this.cartService.cart;
  }

  ngAfterViewInit() {
    this.elements = this.cartService.cart;
  }

  removeProductFromCart(product: Product) {
    this.cartService.removeProduct(product);
    this.elements = this.cartService.cart;
  }

  placeOrder() {
    let order: string = '';
    this.elements.forEach(product => {
       order += `<b> Product name ${product.name} - price: ${product.price}  - quantity: ${product.quantity} <b> <br/>`;
    });

    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : '',
      Password : '',
      To : '',
      From : '',
      Subject : this.subject,
      Body : `
      <b>This is sent for an order placed.</b> <br/> 
      <b>Client Name: </b>${this.fullname} <br /> 
      <b>Email: </b>${this.clientEmail}<br />  
      <b>Message:</b> <br /> ${this.comment} <br><br> 
      ${order} <br/><br/>
      <b>~End of Message.~</b> `
      }).then( message => {console.log('email sent'); } );
      console.log('order placed');
      this.clearCartAndFields();
  }

  clearCartAndFields() {
    this.fullname = '';
    this.contact = '';
    this.address = '';
    this.clientEmail = '';
    this.message = '';
    this.comment = '';
    this.cartService.cart = [];
    this.elements = [];
  }
}
