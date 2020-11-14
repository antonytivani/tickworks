import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { EmailService } from 'src/app/services/email.service';
import { EmailPayload } from 'src/app/models/email.payload';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckOutComponent implements OnInit, AfterViewInit {
  elements: Product[] = [];
  headElements = ['Product name', 'Quantity', 'Price', 'Remove'];
  total: Number;
  totalQuantity: Number;

  fullname;
  contact;
  address;
  clientEmail;
  message;
  comment;
  subject = 'Order';

  constructor(
    private cartService: CartService,
    private emailService: EmailService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.elements = this.cartService.cart;
    this.total = this.cartService.totalCartPrice();
    this.totalQuantity = this.cartService.totalCartQuantity();
  }

  ngAfterViewInit() {
    this.elements = this.cartService.cart;
  }

  removeProductFromCart(product: Product) {
    this.cartService.removeProduct(product);
    this.showSucess(`${product.name} removed from cart`);
    this.elements = this.cartService.cart;
    this.total = this.cartService.totalCartPrice();
    this.totalQuantity = this.cartService.totalCartQuantity();

    // navigate to home if products list is empty
    if (this.elements.length === 0) {
      this.router.navigate(['/']);
    }
  }

  placeOrder() {
    let order: string = '<ul>';
    this.elements.forEach((product) => {
      order += `
      <li>
        <div>
          <p class="product-name">${product.name}</p>
          <p>Quantity: ${product.quantity}</p>
          <p class="product-total">R ${product.quantity * product.price}</p>
        </div>
      </li>`;
    });
    order += '</ul>'
    let body = `<html>
    <head>
      
      <style>
        *{
          margin: 0;
          box-sizing: border-box;
        }
    
        .myCard{
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          display: block;
          margin: auto;
          max-width: 400px;
          border: 1px solid #f1f1f1;
          border-radius: 6px;
          margin-top: 1em;
          border-radius: 6px;
          
        }
    
        .header{
          background-color: rgba(0, 0, 0, 0.9);
          color: #fff;
          font-size: 23px;
          font-family: inherit;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          text-align: center;
          font-weight: 300;
          margin: auto;
          padding: .5em ;
        }
    
        .content{
          padding: 1em;
        }
    
        ul {
          list-style-type: none; 
          padding: 1em; 
          margin: 0; 
        }
    
        ul li:first-child{
          border-top: 1px solid #f1f1f1;
        }
    
        ul li {
          font-size: 12px;
          border-bottom: 1px solid #f1f1f1;
          padding: 12px; 
        }
    
        ul li:last-child{
          border-bottom: none;
        }
    
        .summary, .user-heading, .comment, .comment-heading{
          font-weight: 300;
          color: rgba(0,0,0,0.5);
          font-style: italic;
        }
        
        .comment{
          font-size: 14px;
          padding: 1em;
          color: rgba(0,0,0,0.8);
          margin-bottom: 1em;
        }
        .footer{
          background-color: #f00;
          color: #fff;
          padding: 1em;
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
        }
    
        .footer span{
          display: block; 
          text-align: center; 
          font-size: 18px;
          font-weight: 500;
        }
    
        .product-name{
          font-size: 14px;
        }
        .product-total{
          font-weight: 500;
          text-align: right;
          color: red;
        }
    
        .user{
          border-bottom: 1px solid #ccc;
          font-size: 14px;
          padding-bottom: 1em;
          color: rgba(0, 0, 0, 0.5);
          margin-bottom: 1em;
        }
    
    
        .user p{
          text-align: center;;
        }
      </style>
    </head>
      <body>
        <div class="myCard">
          <h1 class="header">New Order</h1>
          <div class="content">
            <p class="user-heading">
              From
            </p>
            <div class="user">
              <p>${this.fullname}</p>
              <p>${this.contact}</p>
              <p>${this.clientEmail}</p>
              <p>${this.address}</p>
            </div>
    
            <p class="comment-heading">Comment</p>
            <p class="comment">${this.comment}</p>
            <p class="summary">Order Summary</p>
            ${order}     
          </div>
          <p class="footer">Total Price
            <span>R ${this.total}</span>
          </p>
        </div>
      </body>
    </html>`;

    let emailPayload: EmailPayload = {
      subject: this.subject,
      from: this.clientEmail,
      body: body,
    };

    this.showSucess('');
    this.emailService.sendEmail(emailPayload);
    this.clearCartAndFields();

    // navigate to homepage
    this.router.navigate(['/']);
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

  showSucess(msg: string) {
    this.toaster.success('order successfull', msg.toUpperCase(), { closeButton: true });
  }
}
