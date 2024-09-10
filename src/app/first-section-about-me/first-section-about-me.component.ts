import { Component } from '@angular/core';

@Component({
  selector: 'app-first-section-about-me',
  standalone: true,
  imports: [],
  templateUrl: './first-section-about-me.component.html',
  styleUrl: './first-section-about-me.component.scss'
})
export class FirstSectionAboutMeComponent {

  arrowDownSrc: string = '../../assets/img/arrow.png';

  onHover() {
    this.arrowDownSrc = '../../assets/img/arrowHoverDown.png';
  }

  onLeave() {
    this.arrowDownSrc = '../../assets/img/arrow.png';
  }

}
