import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-petstore',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ul>
        <li *ngFor="let pet of vm.petstore; trackBy: trackByPet">
          {{ pet.name }}
        </li>
      </ul>
      >
    </ng-container>
  `,
  styles: [
    `
      :host {
        ul {
          --row-height: 2rem;
          margin: 2rem;
          display: grid;
          grid-template-columns: minmax(0,1fr);
          gap: 1rem;
          grid-auto-rows: var(--row-height);
          li {
            display:grid;
            place-items: center;
            background-color: lightgrey;
            font-size:calc(var(--row-height) * 0.7);
            font-weight: bold;
          }
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetstoreComponent {
  public readonly vm$: Observable<{ petstore: any[] }> = inject(ActivatedRoute).data.pipe(
    filter(({ petstore }) => Boolean(petstore)),
    map(({ petstore }) => ({ petstore }))
  );

  trackByPet(i: number, pet: any): number {
    return i;
  }
}
