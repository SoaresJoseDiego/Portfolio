import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/components/header/header.component';
import { HeroComponent } from "./features/home/components/hero/hero.component";
import { AboutComponent } from "./features/home/components/about/about.component";
import { SkillsComponent } from "./features/home/components/skills/skills.component";
import { ProjectsComponent } from "./features/home/components/projects/projects.component";
import { ContactComponent } from "./features/home/components/contact/contact.component";
import { FooterComponent } from "./features/home/components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  private initScrollAnimations(): void {
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

    // Observar todos os elementos com classes de animação
    setTimeout(() => {
      const animatedElements = document.querySelectorAll(
        '.animate-on-scroll, .animate-fade-up, .animate-fade-left, .animate-fade-right, .animate-scale'
      );
      animatedElements.forEach(el => observer.observe(el));
    }, 100);
  }
}
