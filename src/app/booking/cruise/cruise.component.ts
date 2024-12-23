import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-cruise',
  imports: [CardModule, NgOptimizedImage],
  templateUrl: './cruise.component.html',
  styleUrl: './cruise.component.scss'
})
export class CruiseComponent {

}
