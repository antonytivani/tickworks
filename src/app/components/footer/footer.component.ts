import { ToastrService } from "ngx-toastr";
import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { EmailPayload } from 'src/app/models/email.payload';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  email;
  
  constructor(private emailService: EmailService, 
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  subscribeToNewsletter() {
    let body =`
      <b>This is sent from Newsletter subscription page.</b> <br/> 
      <b>Client Email: </b>${this.email}<br />  
      <b>Message: Please subscribe me to your newsletter mailing list.</b> <br /> <br><br> 
      <b>~End of Message.~</b> `;
      
    let emailPayload: EmailPayload = {
    subject: 'Newsletter subscription request',
    from: this.email,
    body: body,
    };

    this.emailService.sendEmail(emailPayload);
    console.log('subscribed to newsletter');
    this.clearFields();

    this.showSuccess('subscribed to news letter')
    window.scrollTo(0, 0)
  }
  
  clearFields() {
    this.email = '';
  }

  // toaster
  showSuccess(msg: string){
    this.toastr.success(msg.toUpperCase())
  }
}
