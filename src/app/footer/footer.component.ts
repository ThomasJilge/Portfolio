import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

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
