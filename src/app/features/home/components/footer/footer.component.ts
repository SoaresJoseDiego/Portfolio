import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

    socialLinks = [
      { name: 'GitHub', url: 'https://github.com/SoaresJoseDiego', icon: 'github' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/diegoj-soares', icon: 'linkedin' }
    ];
}
