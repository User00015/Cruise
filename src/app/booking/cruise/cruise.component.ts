import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-cruise',
  imports: [CardModule, NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './cruise.component.html',
  styleUrl: './cruise.component.scss'
})
export class CruiseComponent {

}
