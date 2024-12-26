import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ports',
  imports: [RouterModule, ButtonModule],
  templateUrl: './ports.component.html',
  styleUrl: './ports.component.scss'
})
export class PortsComponent {

}
