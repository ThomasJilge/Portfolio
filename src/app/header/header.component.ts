import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core'; // Importiere TranslateModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule], // Füge TranslateModule hier hinzu
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedSection: string = '';
  selectedLanguage: string = 'EN';
  isMenuOpen: boolean = false;

  constructor(private translate: TranslateService) {
    // Setze die Standardsprache
    translate.setDefaultLang('en');
    translate.use('en');  // Standardmäßig auf Englisch setzen
  }

  setActiveSection(section: string) {
    this.selectedSection = section;
  }

  setLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language);  // Sprache wechseln
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

}
