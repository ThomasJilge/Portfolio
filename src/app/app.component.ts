import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './main-content/header/header.component';
import { FirstSectionAboutMeComponent } from './main-content/first-section-about-me/first-section-about-me.component';
import { WhyMeComponent } from './main-content/why-me/why-me.component';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';
import { MyProjectsComponent } from './main-content/my-projects/my-projects.component';
import { ReferenceComponent } from './main-content/reference/reference.component';
import { FooterComponent } from './main-content/footer/footer.component';
import { ContactformComponent } from "./main-content/contactform/contactform.component";
import { MainContentComponent } from "./main-content/main-content.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
  imports: [CommonModule,
    RouterOutlet,
    HeaderComponent,
    FirstSectionAboutMeComponent,
    WhyMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    ReferenceComponent,
    FooterComponent,
    ContactformComponent, 
    MainContentComponent],
})

export class AppComponent {
  title = 'portfolio';
}





















