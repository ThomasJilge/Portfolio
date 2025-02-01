import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent {
  isDragging = false;
  startX = 0;
  initialPosition = 0;
  currentTransform = 0;

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('en');
    translate.use('en');
  }

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
    this.initialPosition = this.currentTransform;
    event.preventDefault();
  }


  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const deltaX = event.clientX - this.startX; 
      this.currentTransform = this.initialPosition + deltaX; 
      const container = event.currentTarget as HTMLElement; 
      container.style.transform = `translateX(${this.currentTransform}px)`; 
    }
  }

  onMouseUp(event: MouseEvent) {
    this.isDragging = false;
  }
}


