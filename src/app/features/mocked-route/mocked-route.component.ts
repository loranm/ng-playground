import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <p>{{ vm.title }}</p>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MockedRouteComponent {
  vm$ = inject(ActivatedRoute).title.pipe(map((title) => ({ title })));
}
