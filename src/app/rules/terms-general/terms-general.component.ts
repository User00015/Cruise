import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-terms-general',
  imports: [PanelModule, RouterLink],
  templateUrl: './terms-general.component.html',
  styleUrl: './terms-general.component.scss'
})
export class TermsGeneralComponent {

}
