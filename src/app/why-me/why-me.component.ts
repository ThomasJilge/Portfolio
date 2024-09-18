import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {

  locatedSrc: string = '../../assets/img/located.png';
  locatedSrc2: string = '../../assets/img/Ellipse 20.png';
  relocateSrc: string = '../../assets/img/relocate.png';
  remoteSrc: string = '../../assets/img/laptop.png';

  isRemoteHovered: boolean = false;

  onHover(item: string) {
    switch (item) {
      case 'located':
        this.locatedSrc = '../../assets/img/Group 60.png';
        break;
      case 'relocate':
        this.relocateSrc = '../../assets/img/relocateHover.png';
        break;
      case 'remote':
        this.remoteSrc = '../../assets/img/laptopHover.png';
        this.isRemoteHovered = true;
        break;
    }
  }

  onLeave(item: string) {
    switch (item) {
      case 'located':
        this.locatedSrc = '../../assets/img/located.png';
        break;
      case 'relocate':
        this.relocateSrc = '../../assets/img/relocate.png';
        break;
      case 'remote':
        this.remoteSrc = '../../assets/img/laptop.png';
        this.isRemoteHovered = false;
        break;
    }
  }

}
