import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillCategories = [
    {
      titleKey: 'SKILLS.FRONTEND',
      icon: 'frontend',
      skills: [
        { name: 'Angular', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'SCSS', level: 70 },
      ],
    },
    {
      titleKey: 'SKILLS.BACKEND',
      icon: 'backend',
      skills: [
        { name: 'C#', level: 75 },
        { name: '.NET', level: 70 },
        { name: 'MYSql/SQL Server', level: 65 },
        { name: 'REST APIs', level: 75 },
      ],
    },
    {
      titleKey: 'SKILLS.TOOLS',
      icon: 'tools',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'Azure DevOps', level: 60 },
        { name: 'Docker', level: 50 },
      ],
    },
  ];
}
