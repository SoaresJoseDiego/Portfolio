import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
 projects = [
      {
        title: 'Sistema de Gestão',
        description: 'Aplicação web para gerenciamento empresarial com dashboard interativo e relatórios.',
        tags: ['Angular', '.NET', 'SQL Server'],
        github: 'https://github.com/SoaresJoseDiego',
        demo: null
      },
      {
        title: 'API RESTful',
        description: 'API completa com autenticação JWT, CRUD e documentação Swagger.',
        tags: ['C#', '.NET Core', 'Entity Framework'],
        github: 'https://github.com/SoaresJoseDiego',
        demo: null
      },
      {
        title: 'Portfólio Pessoal',
        description: 'Este portfólio desenvolvido com Angular 19 e SCSS puro, seguindo boas práticas.',
        tags: ['Angular', 'TypeScript', 'SCSS'],
        github: 'https://github.com/SoaresJoseDiego/Portfolio',
        demo: null
      }
    ];
}
