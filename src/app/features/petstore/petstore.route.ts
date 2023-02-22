import { inject } from '@angular/core';
import { Routes, ActivatedRouteSnapshot } from '@angular/router';
import { PetstoreService } from '../../webservices/petstore.service';
export const PetStoreRoutes: Routes = [
  {
    path: '',
    title: 'Pets List',
    loadComponent: async () => (await import('src/app/features/petstore/petstore.component')).PetstoreComponent,
    resolve: {
      petstore: () => inject(PetstoreService).petsAvailable$(),
    },
  },
  {
    path: ':petId',
    title: 'Pet Details',
    loadComponent: async () => (await import('src/app/features/petdetail/petdetail.component')).PetdetailComponent,
    resolve: {
      petDetails: (route: ActivatedRouteSnapshot) =>
        inject(PetstoreService).getPetDetails$(route.paramMap.get('petId') as string),
    },
  },
];
