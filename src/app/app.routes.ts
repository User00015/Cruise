import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CruiseComponent } from './booking/cruise/cruise.component';
import { HotelComponent } from './booking/hotel/hotel.component';
import { CocoCayComponent } from './itinerary/coco-cay/coco-cay.component';
import { BiminiComponent } from './itinerary/bimini/bimini.component';
import { TermsGeneralComponent } from './rules/terms-general/terms-general.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrePostCruiseComponent } from './info-and-tips/pre-post-cruise/pre-post-cruise.component';
import { PortsComponent } from './info-and-tips/ports/ports.component';
import { ShipComponent } from './info-and-tips/ship/ship.component';
import { ExcursionsComponent } from './info-and-tips/ports/excursions/excursions.component';
import { FraudsComponent } from './info-and-tips/ports/frauds/frauds.component';
import { ProhibitedItemsComponent } from './info-and-tips/ship/prohibited-items/prohibited-items.component';
import { BeveragePackagesComponent } from './info-and-tips/ship/beverage-packages/beverage-packages.component';
import { RespectPolicyComponent } from './info-and-tips/ship/respect-policy/respect-policy.component';
import { CabinMagnetismComponent } from './info-and-tips/ship/cabin-magnetism/cabin-magnetism.component';
import { WifiCallingComponent } from './info-and-tips/ship/wifi-calling/wifi-calling.component';
import { MainDiningComponent } from './info-and-tips/ship/main-dining/main-dining.component';
import { QuickInsightsComponent } from './info-and-tips/ship/quick-insights/quick-insights.component';
import { TermsAndConditionsComponent } from './rules/terms-and-conditions/terms-and-conditions.component';
import { ScheduleComponent } from './events/schedule/schedule.component';
import { HostAnEventComponent } from './events/host-an-event/host-an-event.component';

export const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'booking/cruise', component: CruiseComponent },
  { path: 'booking/hotel', component: HotelComponent },
  { path: 'events/schedule', component: ScheduleComponent},
  { path: 'events/host-an-event', component: HostAnEventComponent},
  { path: 'itinerary/cococay', component: CocoCayComponent },
  { path: 'itinerary/bimini', component: BiminiComponent },
  { path: 'rules/terms_general', component: TermsGeneralComponent },
  { path: 'info-and-tips/pre-post', component: PrePostCruiseComponent },
  {
    path: 'info-and-tips/ports', component: PortsComponent,
    children: [
      { path: 'excursions', component: ExcursionsComponent },
      { path: 'fraud', component: FraudsComponent },
    ]
  },
  {
    path: 'info-and-tips/ship', component: ShipComponent,
    children: [
      { path: 'prohibited-items', component: ProhibitedItemsComponent },
      { path: 'beverage-packages', component: BeveragePackagesComponent },
      { path: 'respect-policy', component: RespectPolicyComponent },
      { path: 'cabin-magnetism', component: CabinMagnetismComponent },
      { path: 'wifi-calling', component: WifiCallingComponent },
      { path: 'main-dining', component: MainDiningComponent },
      { path: 'quick-insights', component: QuickInsightsComponent },
    ]
  },
  { path: 'general-rules', component: TermsGeneralComponent },
  {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
