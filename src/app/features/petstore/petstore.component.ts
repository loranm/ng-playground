import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { PetCardComponent } from '@commons/pet-card/pet-card.component';
import { CapitalizeDirective } from '../../commons/directives/pet-name.directive';

@Component({
  selector: 'app-petstore',
  standalone: true,
  imports: [CommonModule, PetCardComponent, CapitalizeDirective],
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ul class="pet-list">
        <li *ngFor="let pet of vm.petstore; trackBy: trackByPet">
          <app-pet-card>
            <span name capitalize>
              {{ pet.name }}
            </span>
          </app-pet-card>
        </li>
      </ul>
      >
    </ng-container>
  `,
  styles: [
    `
      :host {
        .pet-list {
          --row-height: 2rem;
          outline: 1px solid;
          margin: 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
          gap: 1.5rem;
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
