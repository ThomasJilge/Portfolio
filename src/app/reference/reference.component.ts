import { Component } from '@angular/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [],
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent {
  isDragging = false;
  startX = 0;
  initialPosition = 0;
  currentTransform = 0;

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


