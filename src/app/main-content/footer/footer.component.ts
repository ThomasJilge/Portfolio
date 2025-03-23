import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('en');
    translate.use('en');
  }

  githubSrc: string = '../../assets/img/Github button.png';
  mailSrc: string = '../../assets/img/mail button.png';
  linkedinSrc: string = '../../assets/img/linkedin button.png';

  onHover(buttonType: string) {
    switch (buttonType) {
      case 'github':
        this.githubSrc = '../../assets/img/githubHover.png';
        break;
      case 'mail':
        this.mailSrc = '../../assets/img/mailHover.png';
        break;
      case 'linkedin':
        this.linkedinSrc = '../../assets/img/linkedinHover.png';
        break;
    }
  }

  
  onLeave(buttonType: string) {
    switch (buttonType) {
      case 'github':
        this.githubSrc = '../../assets/img/Github button.png';
        break;
      case 'mail':
        this.mailSrc = '../../assets/img/mail button.png';
        break;
      case 'linkedin':
        this.linkedinSrc = '../../assets/img/linkedin button.png';
        break;
    }
  }

}










