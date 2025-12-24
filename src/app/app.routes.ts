import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
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
import { TransportationComponent } from './booking/transportation/transportation.component';
import { CommunityComponent } from './community/community/community.component';
import { ContactUsComponent } from './contacts/contact-us/contact-us.component';
import { BaminiComponent } from './info-and-tips/bamini/bamini.component';
import { PortCanaveralComponent } from './info-and-tips/port-canaveral/port-canaveral.component';
import { FaqComponent } from './info-and-tips/faq/faq.component';
import { LocationMapsComponent } from './info-and-tips/location-maps/location-maps.component';
import { CosplayGuidelinesComponent } from './info-and-tips/cosplay-guidelines/cosplay-guidelines.component';
import { CococayComponent } from './info-and-tips/cococay/cococay.component';
import { ByoComponent } from './info-and-tips/ship/byo/byo.component';
import { SeasickComponent } from './info-and-tips/ship/seasick/seasick.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NassauComponent } from './info-and-tips/nassau/nassau.component';
import { Cruise2026Component } from './booking/cruise/2026/cruise.component';
import { Cruise2027Component } from './booking/cruise/2027/cruise.component';
import { Hotel2026Component } from './booking/hotel/2026/hotel2026.component';
import { Hotel2027Component } from './booking/hotel/2027/hotel2027/hotel2027.component';
import { CosplayContestComponent } from './cosplay-contest/cosplay-contest.component';

export const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'booking/2026/cruise', component: Cruise2026Component },
  { path: 'booking/2027/cruise', component: Cruise2027Component },
  { path: 'booking/2026/hotel', component: Hotel2026Component },
  { path: 'booking/2027/hotel', component: Hotel2027Component },
  { path: 'booking/transportation', component: TransportationComponent },
  { path: 'events/schedule', component: ScheduleComponent },
  { path: 'events/host-an-event', component: HostAnEventComponent },
  { path: 'rules/terms_general', component: TermsGeneralComponent },
  { path: 'info-and-tips/pre-post', component: PrePostCruiseComponent },
  { path: 'info-and-tips/cosplay', component: CosplayGuidelinesComponent },
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
      { path: 'byo-drinks', component: ByoComponent },
      { path: 'cabin-magnetism', component: CabinMagnetismComponent },
      { path: 'wifi-calling', component: WifiCallingComponent },
      { path: 'main-dining', component: MainDiningComponent },
      { path: 'quick-insights', component: QuickInsightsComponent },
      { path: 'seasick', component: SeasickComponent },
    ]
  },
  { path: 'info-and-tips/cococay', component: CococayComponent },
  { path: 'info-and-tips/bimini', component: BaminiComponent },
  { path: 'info-and-tips/nassau', component: NassauComponent },
  { path: 'info-and-tips/port-canaveral', component: PortCanaveralComponent },
  { path: 'info-and-tips/faq', component: FaqComponent },
  { path: 'info-and-tips/maps', component: LocationMapsComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'general-rules', component: TermsGeneralComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'cosplay-contest', component: CosplayContestComponent},
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: '**', redirectTo: 'landing-page' },
];
