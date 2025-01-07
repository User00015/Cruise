import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-hotel',
  imports: [CardModule, NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.scss'
})
export class HotelComponent {

}
