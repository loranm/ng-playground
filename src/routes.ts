import { Routes } from '@angular/router';

import { RoutesEnum } from './routes.enum';

export const ROUTES: Routes = [
  {
    path: RoutesEnum.HOME,
    loadComponent: async () => (await import('src/app/features/home/home.component')).HomeComponent,
  },
  {
    path: RoutesEnum.TEMPLATE_OUTLET,
    title: 'ng template outlet demo',
    loadComponent: async () => (await import('src/app/features/outlet/outlet.component')).OutletComponent,
  },
  {
    path: RoutesEnum.ONBOARDING,
    title: 'Onboarding MockUp',
    loadComponent: async () =>
      await (
        await import('src/app/features/onboarding/onboarding.component')
      ).OnboardingComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: async () =>
      (await import('src/app/features/page-not-found/page-not-found.component')).PageNotFoundComponent,
  },
];
