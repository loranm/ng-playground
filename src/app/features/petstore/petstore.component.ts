import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs';
import { PetCardComponent } from '@commons/pet-card/pet-card.component';
import { CapitalizeDirective } from '../../commons/directives/pet-name.directive';
import { Pet } from '@models/pet/pet';
import { ToStringPipe } from '@commons/pipes/to-string.pipe';

@Component({
  selector: 'app-petstore',
  standalone: true,
  imports: [CommonModule, PetCardComponent, CapitalizeDirective, RouterModule, ToStringPipe],
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ul class="pet-list">
        <li *ngFor="let pet of vm.petstore; trackBy: trackByPet">
          <a [routerLink]="pet.id | toString">
            <app-pet-card>
              <span name capitalize>
                {{ pet.name }}
              </span>
            </app-pet-card>
          </a>
        </li>
      </ul>
      >
    </ng-container>
  `,
  styles: [
    `
      :host {
        .pet-list {
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
  public readonly vm$ = inject(ActivatedRoute).data.pipe(
    filter((data): data is Partial<{ petstore: Pet[] }> => Boolean(data['petstore'])),
    map(({ petstore }) => ({ petstore }))
  );

  trackByPet(_i: number, pet: Pet): string {
    return pet.name;
  }
}
