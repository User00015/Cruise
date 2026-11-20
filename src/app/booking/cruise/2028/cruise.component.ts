import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CruiseFooterComponent } from '../common/cruise-footer/cruise-footer.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cruise',
  imports: [CardModule, NgOptimizedImage, RouterLink, RouterLinkActive, CruiseFooterComponent],
  templateUrl: './cruise.component.html',
  styleUrl: './cruise.component.scss'
})
export class Cruise2028Component {

}
