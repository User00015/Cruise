import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-judge-guidelines',
  imports: [ButtonModule, RouterOutlet, RouterLink],
  templateUrl: './judge-guidelines.component.html',
  styleUrl: './judge-guidelines.component.scss'
})
export class JudgeGuidelinesComponent {

}
