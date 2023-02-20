import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { PetstoreService } from '../../webservices/petstore.service';
export const PetStoreRoutes: Routes = [
  {
    path: '',
    loadComponent: async () =>  (await import('src/app/features/petstore/petstore.component')).PetstoreComponent,
    resolve: {
      petstore: () =>  inject(PetstoreService).petsAvailable$
    }
  }

]

