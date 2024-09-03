import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  skillImagesOne: string[] = [
    '../../assets/img/skills/angular.png',
    '../../assets/img/skills/typescript.png',
    '../../assets/img/skills/javascript.png',
    '../../assets/img/skills/html.png',
    '../../assets/img/skills/css.png',
    '../../assets/img/skills/rest.api.png',
  ];

  skillImagesTwo: string[] = [
    '../../assets/img/skills/firebase.png',
    '../../assets/img/skills/git.png',
    '../../assets/img/skills/scrum.png',
    '../../assets/img/skills/materialDesign.png',
    '../../assets/img/skills/challengeMe.png'
  ];

}
