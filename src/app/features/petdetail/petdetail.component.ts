import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { Pet } from '@models/pet/pet';

@Component({
  selector: 'app-petdetail',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-container *ngIf="pet$ | async as pet">
    <article>
      <p>Pet name is: {{ pet.name }}</p>
    </article>
  </ng-container>`,
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        justify-items: center;
        article {
          padding: 2rem;
          width: min(31.25rem, 80%);
          border: 1px solid var(--border-clr);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetdetailComponent {
  readonly pet$ = inject(ActivatedRoute).data.pipe(
    filter((data): data is Partial<{ petDetails: Pet }> => Boolean(data['petDetails'])),
    map(({ petDetails }) => ({
      ...petDetails,
    }))
  );
}
