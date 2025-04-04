import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterLink, RouterModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})

export class ContactformComponent {

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('en');
    translate.use('en');
  }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: ""
  }
binding: any;

mailTest = false;
isPrivacyPolicyChecked = false;
successPopup = false;

post = {
  endPoint: 'https://thomas-jilge.com/sendMail.php',
  body: (payload: any) => JSON.stringify(payload),
  options: {
    headers: {
      'Content-Type': 'text/plain',
      responseType: 'text',
    },
  },
};

onSubmit(ngForm: NgForm) {
  if (ngForm.valid && !this.mailTest) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: () => {
          this.successPopup = true;
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
          alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.');
        },
        complete: () => console.info('send post complete'),
      });
  } else if (ngForm.valid && this.mailTest) {
    this.successPopup = true; 
    ngForm.resetForm();
  }
}

mailContactMe: string = '../../assets/img/email.png';
phoneContactMe: string = '../../assets/img/phone.png';
arrowUpSrc: string = '../../assets/img/arrowUp.png';
isHovered: boolean = false;

onHover(item: string) {
  switch (item) {
    case 'mail':
      this.mailContactMe = '../../assets/img/mailHoverContactMe.png';
      break;
    case 'phone':
      this.phoneContactMe = '../../assets/img/phoneHoverContactMe.png';
      break;
    case 'arrowUp':
      this.arrowUpSrc = '../../assets/img/arrowHoverUp.png';
      this.isHovered = true;
      break;
  }
}

onLeave(item: string) {
  switch (item) {
    case 'mail':
      this.mailContactMe = '../../assets/img/email.png';
      break;
    case 'phone':
      this.phoneContactMe = '../../assets/img/phone.png';
      break;
    case 'arrowUp':
      this.arrowUpSrc = '../../assets/img/arrowUp.png';
      this.isHovered = false;
      break;
  }
}

closePopup() {
  this.successPopup = false;
}
}
