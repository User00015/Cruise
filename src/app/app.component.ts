import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, NavMenuComponent, NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Cruise';
}
