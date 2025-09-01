import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { definePreset} from '@primeng/themes'

import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

//const DarkModeCompatProfile = definePreset(Aura, {
//  semantic: {
//    colorScheme: {
//      dark: {
//        primary: {
//          color: 'black'
//        },
//        surface: {
//          color: 'black'
//        },
//      }
//    }
//  }
//});

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideHttpClient(withFetch()),
  providePrimeNG({
    theme: {
      preset: Aura,
      options: {
        cssLayer: {
          name: 'primeng',
        }
      },
    }
  })]
};
