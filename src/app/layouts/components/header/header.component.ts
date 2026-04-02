import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' },
  ];

  isMenuOpen = false;



   isDarkMode = true;

    ngOnInit(): void {
      const saved = localStorage.getItem('theme');
      if (saved) {
        this.isDarkMode = saved === 'dark';
      } else {
        this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      this.applyTheme();
    }

    toggleMenu(): void {
      this.isMenuOpen = !this.isMenuOpen;
    }

    toggleTheme(): void {
      this.isDarkMode = !this.isDarkMode;
      this.applyTheme();
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }

    private applyTheme(): void {
      document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
    }

  
}
