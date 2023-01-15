import { RoutesEnum } from 'src/routes.enum';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatListModule],
  template: ` <mat-nav-list>
    <mat-list-item>
      <a [routerLink]="['/', routes.TEMPLATE_OUTLET]" routerLinkActive="router-link-active">Ng Template Outlet</a>
    </mat-list-item>
    <mat-list-item>
      <a [routerLink]="['/', routes.ONBOARDING]" routerLinkActive="router-link-active">Onboarding</a>
    </mat-list-item>
  </mat-nav-list>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly routes = RoutesEnum;
}
