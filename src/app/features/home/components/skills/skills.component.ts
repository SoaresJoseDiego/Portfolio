import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Front-end',
      skills: [
        { name: 'Angular', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'SCSS', level: 70 },
      ],
    },
    {
      title: 'Back-end',
      skills: [
        { name: 'C#', level: 75 },
        { name: '.NET', level: 70 },
        { name: 'MYSql/SQL Server', level: 65 },
        { name: 'REST APIs', level: 75 },
      ],
    },
    {
      title: 'Ferramentas',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'Azure DevOps', level: 60 },
        { name: 'Docker', level: 50 },
      ],
    },
  ];
}
