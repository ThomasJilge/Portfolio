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
  selectedLanguage: string = 'EN';
  isMenuOpen: boolean = false;

  setActiveSection(section: string) {
    this.selectedSection = section;
  }

  setLanguage(language: string) {
    this.selectedLanguage = language;
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











