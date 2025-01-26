// import { Component, NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { FirstSectionAboutMeComponent } from './first-section-about-me/first-section-about-me.component';
// import { WhyMeComponent } from './why-me/why-me.component';
// import { MySkillsComponent } from './my-skills/my-skills.component';
// import { MyProjectsComponent } from './my-projects/my-projects.component';
// import { ReferenceComponent } from './reference/reference.component';
// import { FooterComponent } from './footer/footer.component';
// import { ContactformComponent } from "./contactform/contactform.component";


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule,
//     RouterOutlet,
//     HeaderComponent,
//     FirstSectionAboutMeComponent,
//     WhyMeComponent,
//     MySkillsComponent,
//     MyProjectsComponent,
//     ReferenceComponent,
//     FooterComponent,
//     ContactformComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'portfolio';
// }


import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FirstSectionAboutMeComponent } from './first-section-about-me/first-section-about-me.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ReferenceComponent } from './reference/reference.component';
import { FooterComponent } from './footer/footer.component';
import { ContactformComponent } from "./contactform/contactform.component";

import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

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
    ContactformComponent],
})

export class AppComponent {
  title = 'portfolio';
}





















