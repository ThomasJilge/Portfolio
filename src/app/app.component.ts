import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './main-content/header/header.component';
import { FooterComponent } from './main-content/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
  imports: [CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ]
})

export class AppComponent {
  title = 'portfolio';
}




















