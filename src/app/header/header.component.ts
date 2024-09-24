import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  selectedSection: string = '';

  setActiveSection(section: string) {
    this.selectedSection = section;
  }

  selectedLanguage: string = 'EN';

  setLanguage(language: string) {
    this.selectedLanguage = language;
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











