import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})

export class ContactformComponent {

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('en');
    translate.use('en');
  }

  http = inject(HttpClient);
  // translate = inject(TranslateService);

  contactData = {
    name: "",
    email: "",
    message: ""
  }
binding: any;

mailTest = true;

isPrivacyPolicyChecked = false;

post = {
  endPoint: 'https://deineDomain.de/sendMail.php',
  body: (payload: any) => JSON.stringify(payload),
  options: {
    headers: {
      'Content-Type': 'text/plain',
      responseType: 'text',
    },
  },
};


onSubmit(ngForm: NgForm) {
  if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {

          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

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

}
