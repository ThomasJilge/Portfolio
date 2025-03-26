import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('en');
    translate.use('en');
  }

  skillImages: string[] = [
    '../../assets/img/skills/angular.png',
    '../../assets/img/skills/typescript.png',
    '../../assets/img/skills/javascript.png',
    '../../assets/img/skills/html.png',
    '../../assets/img/skills/css.png',
    '../../assets/img/skills/rest.api.png',
    '../../assets/img/skills/firebase.png',
    '../../assets/img/skills/git.png',
    '../../assets/img/skills/scrum.png',
    '../../assets/img/skills/materialDesign.png',
    '../../assets/img/skills/challengeMe.png'
  ];
}
