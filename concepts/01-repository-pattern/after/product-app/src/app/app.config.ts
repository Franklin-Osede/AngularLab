import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { MockProductRepository } from './repositories/mock-product.repository';
import { PRODUCT_REPOSITORY } from './repositories/product.repository.interface';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    {
      provide: PRODUCT_REPOSITORY,
      useClass: MockProductRepository,
    },
  ],
};
