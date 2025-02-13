import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'nav-menu',
  imports: [MenubarModule, RouterModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  constructor(private router: Router) { }

  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {
        this.router.navigate(['/'])
      }
    },
    {
      label: 'Attend/Booking',
      icon: 'pi pi-book',
      items: [
        {
          label: 'Cruise',
          //icon: 'pi pi-home',
          command: () => {
            this.router.navigate(['/booking/cruise'])
          }
        },
        {
          label: 'Hotel',
          //icon: 'pi pi-home',
          command: () => {
            this.router.navigate(['/booking/hotel'])
          }
        },
        {
          label: 'Transportation',
          //icon: 'pi pi-home',
          command: () => {
            this.router.navigate(['/booking/transportation'])
          }
        },
      ]
    },
    {
      label: 'Events',
      icon: 'pi pi-calendar',
      items: [
        {
          label: "Schedule",
          //icon: 'pi pi-home',
          command: () => {
            this.router.navigate(['/events/schedule'])
          }
        },
        {
          label: "Host an Event",
          //icon: 'pi pi-home',
          command: () => {
            this.router.navigate(['/events/host-an-event'])
          }
        },
      ]
    },
    {
      label: 'Info/Tips',
      icon: 'pi pi-info-circle',
      items: [
        {
          label: "Pre-Cruise Prep & Tips",
          //icon: 'pi pi-home',
          command: () => {
            this.router.navigate(['/info-and-tips/pre-post'])
          }
        },
        {
          label: "Cosplay Guidelines",
          //icon: 'pi pi-home',
          command: () => {
            this.router.navigate(['/info-and-tips/cosplay'])
          }

        },
        {
          label: "The Ship",
          //icon: 'pi pi-home',
          command: () => {
            this.router.navigate(['/info-and-tips/ship'])
          }

        },
        {
          label: "Cococay",
          //icon: 'pi pi-home',
          command: () => {
            this.router.navigate(['/info-and-tips/cococay'])
          }

        },
        {
          label: "Bimini",
          //icon: 'pi pi-home',
          command: () => {
            this.router.navigate(['/info-and-tips/bimini'])
          }

        },
        {
          label: "Port Canaveral",
          //icon: 'pi pi-home',
          command: () => {
            this.router.navigate(['/info-and-tips/port-canaveral'])
          }

        },
        //{
        //  label: "FAQ",
        //  //icon: 'pi pi-home',
        //  command: () => {
        //    this.router.navigate(['/info-and-tips/faq'])
        //  }

        //},
        {
          label: "Location Maps",
          //icon: 'pi pi-home',
          command: () => {
            this.router.navigate(['/info-and-tips/maps'])
          }

        },
      ]
    },
    {
      label: 'Community',
      icon: 'pi pi-users',
      items: [
        {
          label: "Facebook Groups",
          icon: 'pi pi-facebook',
          items: [
            {
              label: "Facebook Page",
              //icon: "pi pi-home",
              command: () => {
                window.open("https://www.facebook.com/Colossalconcruise", "_blank");
              }
            },
            {
              label: "Facebook Cruisers Group",
              //icon: "pi pi-home",
              command: () => {
                window.open("https://www.facebook.com/groups/ColossalconCruise2019", "_blank");
              }
            }
          ]
        },
        {
          label: "Discord",
          icon: 'pi pi-discord',
          command: () => {
            window.open("https://discord.gg/snskavqjf3", "_blank");
          }
        },

      ]
    },
    {
      label: 'Contact Us',
      icon: 'pi pi-envelope',
      command: () => {
        this.router.navigate(['/contact-us'])
      }
    },
  ]
}
