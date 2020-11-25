import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { EmailPayload } from 'src/app/models/email.payload';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  email;

  constructor(private emailService: EmailService, private toastr: ToastrService) {}

  ngOnInit(): void {}

  subscribeToNewsletter() {
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
        .user-heading{
          margin-bottom: 1em;
        }
      </style>
    </head>
      <body>
        <div class="myCard">
          <h1 class="header">New Subscription Request</h1>
          <div class="content">
            <p class="user-heading">
              From
            </p>
            <div class="user">
              <p>${this.email}</p>
            </div>
    
            <p class="comment-heading">Message</p>
            <p class="comment">Please subscribe me to your newsletter mailing list</p>
               
          </div>
        </div>
      </body>
    </html>`;
    let emailPayload: EmailPayload = {
      subject: 'Newsletter subscription request',
      from: this.email,
      body: body,
    };

    this.emailService.sendEmail(emailPayload);
    // console.log('subscribed to newsletter');
    this.clearFields();

    this.showSuccess('');
    window.scrollTo(0, 0);
  }

  clearFields() {
    this.email = '';
  }

  // toaster
  showSuccess(msg: string) {
    this.toastr.success('subscribed to news letter', msg.toUpperCase(), { closeButton: true });
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
