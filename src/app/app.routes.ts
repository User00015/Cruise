import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CruiseComponent } from './booking/cruise/cruise.component';
import { HotelComponent } from './booking/hotel/hotel.component';
import { CocoCayComponent } from './itinerary/coco-cay/coco-cay.component';
import { BiminiComponent } from './itinerary/bimini/bimini.component';
import { TermsGeneralComponent } from './rules/terms-general/terms-general.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'booking/cruise', component: CruiseComponent },
  { path: 'booking/hotel', component: HotelComponent },
  { path: 'itinerary/coco-cay', component: CocoCayComponent },
  { path: 'itinerary/bimini', component: BiminiComponent },
  { path: 'rules/terms_general', component: TermsGeneralComponent },
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
