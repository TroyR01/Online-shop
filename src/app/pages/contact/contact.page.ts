import { Component } from '@angular/core';
import { FontAwesomeModule,FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp, faGoogle  } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactPage {
  faFacebook = faFacebook;
  faTwitter = faTwitter; 
  faInstagram=faInstagram; 
  faWhatsapp=faWhatsapp; 
  faGoogle=faGoogle;

}
