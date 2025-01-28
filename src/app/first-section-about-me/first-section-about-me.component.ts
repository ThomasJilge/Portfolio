import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-first-section-about-me',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './first-section-about-me.component.html',
  styleUrl: './first-section-about-me.component.scss'
})
export class FirstSectionAboutMeComponent {

  arrowDownSrc: string = 'assets/img/arrowDown.png';
  isHovered: boolean = false;

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('en');
    translate.use('en');
  }

  onHover() {
    this.arrowDownSrc = '../../assets/img/arrowHoverDown.png';
    this.isHovered = true;
  }

  onLeave() {
    this.arrowDownSrc = 'assets/img/arrowDown.png';
    this.isHovered = false;
  }

}
