import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { EmailPayload } from 'src/app/models/email.payload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  name = '';
  email = '';
  subject = '';
  message = '';

  constructor(private emailService: EmailService, private toaster: ToastrService, private router: Router) {}

  ngOnInit(): void {}

  sendMessage() {
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
          border-bottom-color: red;
          border-bottom-width: 2px;
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
          <h1 class="header">New Contact Request</h1>
          <div class="content">
            <p class="user-heading">
              From
            </p>
            <div class="user">
              <p>${this.name}</p>
              <p>${this.email}</p>
            </div>
    
            <p class="comment-heading">Message</p>
            <p class="comment">${this.message}</p>
               
          </div>
        </div>
      </body>
    </html>`;
    let emailPayload: EmailPayload = {
      subject: 'Contact us - ' + this.subject,
      from: this.email,
      body: body,
    };

    this.emailService.sendEmail(emailPayload);
    this.showSucess('');
    this.router.navigate(['/']);
    // console.log('Contact us requested');
    this.clearFields();
  }

  clearFields() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }

  showSucess(msg: string) {
    this.toaster.success('messege sent', msg.toUpperCase(), { closeButton: true });
  }
}
