import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedSection: string = '';
  selectedLanguage: string = 'EN';
  isMenuOpen: boolean = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  setActiveSection(section: string) {
    this.selectedSection = section;
  }

  setLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language.toLowerCase());
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['whyMe', 'mySkills', 'myProjects', 'contactForm'];
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const bounding = element.getBoundingClientRect();
        
        if (bounding.top >= 0 && bounding.top <= window.innerHeight / 2) {
          this.selectedSection = section;
          break;
        }
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
  const target = event.target as HTMLElement;
  const menu = document.querySelector('.headerMenuLinksBurgerMenuContainerOne');
  const burgerButton = document.querySelector('.burgerMenu');

  if (this.isMenuOpen && menu && !menu.contains(target) && !burgerButton?.contains(target)) {
    this.isMenuOpen = false;
  }
}

}

// import { CommonModule } from '@angular/common';
// import { Component, HostListener } from '@angular/core';
// import { TranslateService, TranslateModule } from '@ngx-translate/core';
// import { Router, NavigationEnd } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [CommonModule, TranslateModule],
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent {
//   selectedSection: string = '';
//   selectedLanguage: string = 'EN';
//   isMenuOpen: boolean = false;
//   isImprintPage: boolean = false;

//   constructor(private translate: TranslateService, private router: Router) {
//     translate.setDefaultLang('en');
//     translate.use('en');

//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationEnd) {
//         this.isImprintPage = event.url.includes('/imprint');
//       }
//     });
//   }

//   setActiveSection(section: string) {
//     this.selectedSection = section;
//   }

//   setLanguage(language: string) {
//     this.selectedLanguage = language;
//     this.translate.use(language.toLowerCase());
//   }
  
//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }

//   @HostListener('window:scroll', [])
//   onWindowScroll() {
//     if (this.isImprintPage) return; // Scroll-Tracking deaktivieren, wenn auf der Impressum-Seite
    
//     const sections = ['whyMe', 'mySkills', 'myProjects', 'contactForm'];
    
//     for (const section of sections) {
//       const element = document.getElementById(section);
//       if (element) {
//         const bounding = element.getBoundingClientRect();
        
//         if (bounding.top >= 0 && bounding.top <= window.innerHeight / 2) {
//           this.selectedSection = section;
//           break;
//         }
//       }
//     }
//   }

//   @HostListener('document:click', ['$event'])
//   onClickOutside(event: Event) {
//     const target = event.target as HTMLElement;
//     const menu = document.querySelector('.headerMenuLinksBurgerMenuContainerOne');
//     const burgerButton = document.querySelector('.burgerMenu');

//     if (this.isMenuOpen && menu && !menu.contains(target) && !burgerButton?.contains(target)) {
//       this.isMenuOpen = false;
//     }
//   }
// }

