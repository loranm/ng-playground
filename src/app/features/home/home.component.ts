import { RoutesEnum } from 'src/routes.enum';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '@commons/nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatListModule, NavBarComponent],
  template: `
 <app-nav-bar></app-nav-bar>

 <router-outlet></router-outlet>

  <mat-nav-list>
    <mat-list-item>
      <a [routerLink]="[outletLink]" routerLinkActive="router-link-active">Ng Template Outlet</a>
    </mat-list-item>
  </mat-nav-list>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  get outletLink(): `/${RoutesEnum.TEMPLATE_OUTLET}` {
    return `/outlet`;
  }
}
