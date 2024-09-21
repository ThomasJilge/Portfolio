import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-section-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-section-about-me.component.html',
  styleUrl: './first-section-about-me.component.scss'
})
export class FirstSectionAboutMeComponent {

  arrowDownSrc: string = 'assets/img/arrowDown.png';
  isHovered: boolean = false;

  onHover() {
    this.arrowDownSrc = '../../assets/img/arrowHoverDown.png';
    this.isHovered = true;
  }

  onLeave() {
    this.arrowDownSrc = 'assets/img/arrowDown.png';
    this.isHovered = false;
  }

}
