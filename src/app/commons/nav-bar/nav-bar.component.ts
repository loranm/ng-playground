import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoutesEnum } from '../../../routes.enum';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <nav aria-label="main">
    <ul class="navigation">
      <li  class="navigation__item">
        <a [routerLink]="[RoutesEnum.page1]"
        routerLinkActive="active-page" ariaCurrentWhenActive="page">page 1</a>
      </li>
      <li  class="navigation__item">
        <a [routerLink]="[RoutesEnum.page2]"
        routerLinkActive="active-page"
        ariaCurrentWhenActive="page">page 2</a>
      </li>
      <li  class="navigation__item">
        <a [routerLink]="[RoutesEnum.page3]"
        routerLinkActive="active-page"
        ariaCurrentWhenActive="page">page 3</a>
      </li>
    </ul>
  </nav>
  `,
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
  RoutesEnum = RoutesEnum

}
