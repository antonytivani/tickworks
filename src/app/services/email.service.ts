import { Injectable } from '@angular/core';
import { EmailPayload } from '../models/email.payload';

declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(payload: EmailPayload) {
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : '',
      Password : '',
      To : '',
      From : payload.from,
      Subject : payload.subject,
      Body : payload.body
      }).then( console.log('email sent'));
  }
}


