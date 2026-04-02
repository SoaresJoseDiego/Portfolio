import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats = [
    {value: '2+', label: 'Anos de experiência'},
    {value: '10+', label: 'Projetos desenvolvidos'},
    {value: '5+', label: 'Tecnologias dominadas'}
  ]
}
