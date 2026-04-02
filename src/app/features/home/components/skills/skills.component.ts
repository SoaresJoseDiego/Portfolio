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
  skills = [
    { name: 'Angular', icon: 'devicon-angular-plain colored' },
    { name: 'C#', icon: 'devicon-csharp-plain colored' },
    { name: '.NET', icon: 'devicon-dotnetcore-plain colored' },
    { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  ];
}
