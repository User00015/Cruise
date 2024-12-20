import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'nav-menu',
  imports: [MenubarModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  items: MenuItem[] = [
    {
      label: 'Booking',
      icon: 'pi pi-home',
      items: [
        {
          label: 'Cruise',
          icon: 'pi pi-home'
        },
        {
          label: 'Hotel',
          icon: 'pi pi-home'
        },
      ]
    },
    {
      label: 'Events',
      icon: 'pi pi-home',
      items: [
        {
          label: "Schedule",
          icon: 'pi pi-home'
        },
        {
          label: "Signups",
          icon: 'pi pi-home'
        },
      ]
    },
    {
      label: 'Info & Tips',
      icon: 'pi pi-home',
      items: [
        {
          label: "Pre/Post Cruise",
          icon: 'pi pi-home'
        },
        {
          label: "The Ports",
          icon: 'pi pi-home'
        },
        {
          label: "The Ship",
          icon: 'pi pi-home'
        },
      ]
    },
    {
      label: 'Itinerary',
      icon: 'pi pi-home',
      items: [
        {
          label: "CocoCay",
          icon: 'pi pi-home'
        },
        {
          label: "Bimini",
          icon: 'pi pi-home'
        },
      ]
    },
    {
      label: 'Rules',
      icon: 'pi pi-home'
    },
    {
      label: 'Updates',
      icon: 'pi pi-home'
    },
  ]
}
