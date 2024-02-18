import { Component } from '@angular/core';
import { NewsletterService } from './../../services/newsletter.service';

@Component({
  selector: 'app-form-appoinment-newsletter',
  templateUrl: './form-appoinment-newsletter.component.html',
  styleUrls: ['./form-appoinment-newsletter.component.css']
})
export class FormAppoinmentNewsletterComponent {
  firstName: string = '';
  email: string = '';

  constructor(private newsletterService: NewsletterService) {
    this.firstName = 'First name';
    this.email = 'Email address';
  }

  subscribe() {
    console.log('Data sent successfully:', this.firstName, this.email);

    this.newsletterService.subscribeToNewsletter(this.firstName, this.email)
      .subscribe(response => {
        console.log('Response:', response);
      }, error => {
        console.error('Error sending data:', error);
      });
  }
}
