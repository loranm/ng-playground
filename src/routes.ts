import { Routes } from '@angular/router';
import { RoutesEnum } from './routes.enum';

export const ROUTES: Routes = [
  {
    path: RoutesEnum.HOME,
    loadComponent: async () =>
      (await import('src/app/features/home/home.component')).HomeComponent,
      loadChildren: () => [
        {
          path: RoutesEnum.PETSTORE,
          loadChildren: async () =>  (await import('src/app/features/petstore/petstore.route')).PetStoreRoutes,
        },

          {
            path: RoutesEnum.page2,
            title: "page 2",
            loadComponent: async () =>(await  import('src/app/features/mocked-route/mocked-route.component')).MockedRouteComponent
          },
          {
            path: RoutesEnum.page3,
            title: "page 3",
            loadComponent: async () =>(await  import('src/app/features/mocked-route/mocked-route.component')).MockedRouteComponent
          },

          {
            path: RoutesEnum.page1,
            title: "page 1",
            loadComponent: async () =>(await  import('src/app/features/mocked-route/mocked-route.component')).MockedRouteComponent
          },
          {
            path: RoutesEnum.TEMPLATE_OUTLET,
            title: 'ng template outlet demo',
            loadComponent: async () =>
              (await import('src/app/features/outlet/outlet.component'))
                .OutletComponent,
          },
        ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: async () =>
      (await import('src/app/features/page-not-found/page-not-found.component'))
        .PageNotFoundComponent,
  },
];
