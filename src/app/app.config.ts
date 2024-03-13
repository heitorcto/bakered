import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AdvertisingController } from './controllers/advertising-controller';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    AdvertisingController
  ]
};
