import { Component, HostListener } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  topValue: string = '0';

  githubSrc: string = '../../assets/img/Github button.png';
  mailSrc: string = '../../assets/img/mail button.png';
  linkedinSrc: string = '../../assets/img/linkedin button.png';

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
    this.checkRouteAndViewport();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkRouteAndViewport();
      }
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.checkRouteAndViewport();
  }

  private checkRouteAndViewport() {
    const isHome = this.router.url === '/' || this.router.url.includes('home');
    const isImprint = this.router.url.includes('/imprint');
    const isDataProtection = this.router.url.includes('/data-protection');

    if (isHome) {
      if (window.innerWidth <= 575) {
        this.topValue = '735px'; 
      } else if (window.innerWidth <= 1024) {
        this.topValue = '700px';
      } 
    } else if (isImprint || isDataProtection) {
      this.topValue = '0'; 
    }

  }

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








