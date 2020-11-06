import { Injectable } from '@angular/core';
import { EmailPayload } from '../models/email.payload';

declare let Email: any;

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  sendEmail(payload: EmailPayload) {
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'tony.tivani@gmail.com',
      Password: '6CB0492DEC4B217E69C5603DE14A5A9A3577',
      To: 'tony.tivani@gmail.com',
      From: 'tony.tivani@gmail.com',
      Subject: payload.subject,
      Body: payload.body,
    }).then(console.log('email sent'));
  }
}
