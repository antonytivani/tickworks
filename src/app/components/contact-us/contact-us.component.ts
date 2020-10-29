import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { EmailPayload } from 'src/app/models/email.payload';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {

  name;
  email;
  subject;
  message;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {}

  sendMessage() {
    let body =`
            <b>This is sent from contact us page.</b> <br/> 
            <b>Client Name: </b>${this.name} <br /> 
            <b>Client Email: </b>${this.email}<br />  
            <b>Message:</b> <br /> ${this.message} <br><br> 
            <b>~End of Message.~</b> `;
    let emailPayload: EmailPayload = {
      subject: 'Contact us - ' + this.subject,
      from: this.email,
      body: body,
    };
      
      this.emailService.sendEmail(emailPayload);
      console.log('Contact us requested');
      this.clearFields();
  }

  clearFields() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
}
