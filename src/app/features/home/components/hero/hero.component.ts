import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  name = 'Diego Soares';

  // Typewriter
  roleKeys = ['HERO.ROLES.FULLSTACK', 'HERO.ROLES.ANGULAR', 'HERO.ROLES.DOTNET', 'HERO.ROLES.PROBLEM_SOLVER'];
  roles: string[] = [];
  currentRole = '';
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typewriterInterval: any;
  langSubscription!: Subscription;

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/SoaresJoseDiego', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/diegoj-soares', icon: 'linkedin' }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadRoles();
    this.initScrollAnimations();

    // Recarrega roles quando muda o idioma
    this.langSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadRoles();
    });
  }

  ngOnDestroy(): void {
    if (this.typewriterInterval) {
      clearInterval(this.typewriterInterval);
    }
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

  loadRoles(): void {
    if (this.typewriterInterval) {
      clearInterval(this.typewriterInterval);
    }

    this.translate.get(this.roleKeys).subscribe(translations => {
      this.roles = this.roleKeys.map(key => translations[key]);
      this.roleIndex = 0;
      this.charIndex = 0;
      this.isDeleting = false;
      this.currentRole = '';
      this.startTypewriter();
    });
  }

  startTypewriter(): void {
    const typeSpeed = 150;      // Velocidade de digitação (maior = mais lento)
    const deleteSpeed = 80;     // Velocidade de apagar
    const pauseTime = 2500;     // Pausa quando completa a palavra

    this.typewriterInterval = setInterval(() => {
      const currentText = this.roles[this.roleIndex];

      if (!this.isDeleting) {
        this.currentRole = currentText.substring(0, this.charIndex + 1);
        this.charIndex++;

        if (this.charIndex === currentText.length) {
          this.isDeleting = true;
          clearInterval(this.typewriterInterval);
          setTimeout(() => this.startTypewriter(), pauseTime);
          return;
        }
      } else {
        this.currentRole = currentText.substring(0, this.charIndex - 1);
        this.charIndex--;

        if (this.charIndex === 0) {
          this.isDeleting = false;
          this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        }
      }
    }, this.isDeleting ? deleteSpeed : typeSpeed);
  }

  initScrollAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    }, 100);
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
