import { RoutesEnum } from 'src/routes.enum';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '@commons/nav-bar/nav-bar.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavBarComponent],
  template: `
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
