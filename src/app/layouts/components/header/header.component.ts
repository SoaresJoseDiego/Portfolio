import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  navItems = [
    { label: 'NAV.HOME', href: 'hero' },
    { label: 'NAV.ABOUT', href: 'about' },
    { label: 'NAV.SKILLS', href: 'skills' },
    { label: 'NAV.PROJECTS', href: 'projects' },
    { label: 'NAV.CONTACT', href: 'contact' },
  ];

  isMenuOpen = false;
  isDarkMode = true;
  currentLang = 'pt';

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'pt';
    this.currentLang = savedLang;
    this.translate.use(savedLang);
  }

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

  toggleLanguage(): void {
    this.currentLang = this.currentLang === 'pt' ? 'en' : 'pt';
    this.translate.use(this.currentLang);
    localStorage.setItem('lang', this.currentLang);
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.isMenuOpen = false;
  }

  private applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }
}
