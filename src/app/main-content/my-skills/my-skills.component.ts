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

skillImages: { src: string; label: string; alt: string }[] = [
  { src: '../../assets/img/skills/angularNew.png', label: 'Angular', alt: 'Angular logo, frontend framework skill' },
  { src: '../../assets/img/skills/typescriptNew.png', label: 'TypeScript', alt: 'TypeScript logo, programming language skill' },
  { src: '../../assets/img/skills/javascriptNew.png', label: 'JavaScript', alt: 'JavaScript logo, programming language skill' },
  { src: '../../assets/img/skills/htmlNew.png', label: 'HTML', alt: 'HTML logo, markup language skill' },
  { src: '../../assets/img/skills/cssNew.png', label: 'CSS', alt: 'CSS logo, styling language skill' },
  { src: '../../assets/img/skills/rest.api.new.png', label: 'REST-API', alt: 'REST API logo, backend communication skill' },
  { src: '../../assets/img/skills/firebaseNew.png', label: 'Firebase', alt: 'Firebase logo, backend service skill' },
  { src: '../../assets/img/skills/gitNew.png', label: 'Git', alt: 'Git logo, version control skill' },
  { src: '../../assets/img/skills/scrumNew.png', label: 'Scrum', alt: 'Scrum logo, agile methodology skill' },
  { src: '../../assets/img/skills/materialDesignNew.png', label: 'Material Design', alt: 'Material Design logo, UI design skill' },
  { src: '../../assets/img/skills/challengeMeNew.png', label: 'Challenge Me', alt: 'Challenge Me placeholder, space for learning new technologies' }
];

}
