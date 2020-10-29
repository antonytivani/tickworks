import { Component, OnInit, ElementRef, HostListener, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

import { Product } from 'src/app/models/product';
import { EmailService } from 'src/app/services/email.service';
import { EmailPayload } from 'src/app/models/email.payload';
import { MdbCardBodyComponent } from 'projects/angular-bootstrap-md/src/public_api';


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

  constructor(private cartService: CartService,
              private emailService: EmailService) {}

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
       order += `<b> Product name ${product.name} - price: R ${product.price.toFixed(2)}  - quantity: ${product.quantity} <b> <br/>`;
    });

    let body =`
            <b>This is sent for an order placed.</b> <br/> 
            <b>Client Name: </b>${this.fullname} <br /> 
            <b>Client Email: </b>${this.clientEmail}<br />  
            <b>Client contact: </b>${this.contact}<br /> 
            <b>Address : </b>${this.address }<br />  
            <b>Message:</b> <br /> ${this.comment} <br><br> 
            ${order} <br/><br/>
            <b>~End of Message.~</b> `;
    let emailPayload: EmailPayload = {
      subject: this.subject,
      from: this.clientEmail,
      body: body,
    };
      
      this.emailService.sendEmail(emailPayload);
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
