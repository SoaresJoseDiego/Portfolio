import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/components/header/header.component';
import { HeroComponent } from "./features/home/components/hero/hero.component";
import { AboutComponent } from "./features/home/components/about/about.component";
import { SkillsComponent } from "./features/home/components/skills/skills.component";
import { ProjectsComponent } from "./features/home/components/projects/projects.component";
import { ContactComponent } from "./features/home/components/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
