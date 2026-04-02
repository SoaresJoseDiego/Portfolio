import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats = [
    { value: '2+', labelKey: 'ABOUT.STATS.EXPERIENCE' },
    { value: '10+', labelKey: 'ABOUT.STATS.PROJECTS' },
    { value: '5+', labelKey: 'ABOUT.STATS.TECHNOLOGIES' }
  ];
}
