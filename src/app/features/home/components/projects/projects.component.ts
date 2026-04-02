import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      titleKey: 'PROJECTS.ITEMS.MANAGEMENT.TITLE',
      descriptionKey: 'PROJECTS.ITEMS.MANAGEMENT.DESCRIPTION',
      tags: ['Angular', '.NET', 'SQL Server'],
      github: 'https://github.com/SoaresJoseDiego',
      demo: null
    },
    {
      titleKey: 'PROJECTS.ITEMS.API.TITLE',
      descriptionKey: 'PROJECTS.ITEMS.API.DESCRIPTION',
      tags: ['C#', '.NET Core', 'Entity Framework'],
      github: 'https://github.com/SoaresJoseDiego',
      demo: null
    },
    {
      titleKey: 'PROJECTS.ITEMS.PORTFOLIO.TITLE',
      descriptionKey: 'PROJECTS.ITEMS.PORTFOLIO.DESCRIPTION',
      tags: ['Angular', 'TypeScript', 'SCSS'],
      github: 'https://github.com/SoaresJoseDiego/Portfolio',
      demo: null
    }
  ];
}
