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

skillImages: { src: string; label: string }[] = [
  { src: '../../assets/img/skills/angularNew.png', label: 'Angular' },
  { src: '../../assets/img/skills/typescriptNew.png', label: 'TypeScript' },
  { src: '../../assets/img/skills/javascriptNew.png', label: 'JavaScript' },
  { src: '../../assets/img/skills/htmlNew.png', label: 'HTML' },
  { src: '../../assets/img/skills/cssNew.png', label: 'CSS' },
  { src: '../../assets/img/skills/rest.api.new.png', label: 'REST-API' },
  { src: '../../assets/img/skills/firebaseNew.png', label: 'Firebase' },
  { src: '../../assets/img/skills/gitNew.png', label: 'Git' },
  { src: '../../assets/img/skills/scrumNew.png', label: 'Scrum' },
  { src: '../../assets/img/skills/materialDesignNew.png', label: 'Material Design' },
  { src: '../../assets/img/skills/challengeMeNew.png', label: 'Challenge Me' }
  ];
}
