import { Component, AfterViewInit } from '@angular/core';
import { FirstSectionAboutMeComponent } from "./first-section-about-me/first-section-about-me.component";
import { WhyMeComponent } from "./why-me/why-me.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { ReferenceComponent } from "./reference/reference.component";
import { ContactformComponent } from "./contactform/contactform.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    FirstSectionAboutMeComponent,
    WhyMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    ReferenceComponent,
    ContactformComponent
        ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit() {
    this.observeSections();
  }

  observeSections() {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1,
    });

    sections.forEach(section => observer.observe(section));
  }
}
