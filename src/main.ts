import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { CoreComponent } from '@core/core.component';
import { ROUTES } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

const PROVIDERS = [
  provideRouter(ROUTES),
  importProvidersFrom(BrowserAnimationsModule),
];

bootstrapApplication(CoreComponent, { providers: PROVIDERS });
