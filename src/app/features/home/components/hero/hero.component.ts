import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
    name = 'Diego Soares';
    role = 'Desenvolvedor Full Stack';
    description = 'Transformando ideias em soluções digitais com Angular e .NET';

    socialLinks = [
      { name: 'GitHub', url: 'https://github.com/SoaresJoseDiego', icon: 'github' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/diegoj-soares', icon: 'linkedin' }
    ];
}
