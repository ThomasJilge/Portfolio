import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

}
