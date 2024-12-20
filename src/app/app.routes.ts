import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CruiseComponent } from '../booking/cruise/cruise.component';
import { HotelComponent } from '../booking/hotel/hotel.component';

export const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'booking/cruise', component: CruiseComponent },
  { path: 'booking/hotel', component: HotelComponent },
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
