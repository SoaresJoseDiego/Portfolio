import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  name = 'Diego Soares';
  description = 'Transformando ideias em soluções digitais com Angular e .NET';

  // Typewriter
  roles = ['Desenvolvedor Full Stack', 'Angular Developer', '.NET Developer', 'Problem Solver'];
  currentRole = '';
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typewriterInterval: any;

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/SoaresJoseDiego', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/diegoj-soares', icon: 'linkedin' }
  ];

  ngOnInit(): void {
    this.startTypewriter();
    this.initScrollAnimations();
  }

  ngOnDestroy(): void {
    if (this.typewriterInterval) {
      clearInterval(this.typewriterInterval);
    }
  }

  startTypewriter(): void {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    this.typewriterInterval = setInterval(() => {
      const currentText = this.roles[this.roleIndex];

      if (!this.isDeleting) {
        // Digitando
        this.currentRole = currentText.substring(0, this.charIndex + 1);
        this.charIndex++;

        if (this.charIndex === currentText.length) {
          this.isDeleting = true;
          // Pausa antes de deletar
          clearInterval(this.typewriterInterval);
          setTimeout(() => this.startTypewriter(), pauseTime);
          return;
        }
      } else {
        // Deletando
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

    // Observar elementos com classe .animate-on-scroll
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
