import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoutesEnum } from 'src/routes.enum';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule],
  template: `
    <nav aria-label="main">
      <ul class="navigation">
        <li class="navigation__item">
          <a [routerLink]="[RoutesEnum.TEMPLATE_OUTLET]" routerLinkActive="active-page" ariaCurrentWhenActive="page"
            >Template Outlet</a
          >
        </li>
        <li class="navigation__item">
          <a [routerLink]="[RoutesEnum.PETSTORE]" routerLinkActive="active-page" ariaCurrentWhenActive="page"
            >Petstore</a
          >
        </li>
        <li class="navigation__item">
          <a [routerLink]="[RoutesEnum.page3]" routerLinkActive="active-page" ariaCurrentWhenActive="page">page 3</a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  RoutesEnum = RoutesEnum;
  links = [
    { route: RoutesEnum.TEMPLATE_OUTLET, label: 'Template outlet' },
    { route: RoutesEnum.PETSTORE, label: 'PetStore' },
  ];
}
