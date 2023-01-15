import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],

  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        --gap: 1.5rem;
        --padding: var(--gap);
        background-color: #fafafa;
        border: var(--border-clr) 1px solid;
        border-radius: 13px;
        padding: var(--padding);
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: var(--gap);
        width: min(31.25rem, 90vw);
        box-shadow: var(--box-shadow);
        .content {
          outline: 2px solid red;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
