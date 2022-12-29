import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <h1 class="title">Page not found</h1>
    <mat-icon
      aria-hidden="false"
      aria-label="Example home icon"
      fontIcon="home"
      inline="true"
      class="icon"
    ></mat-icon>
  `,
  styles: [
    `
      :host {
        height: 100%;
        /* background-color: hsl(10 10% 10%); */
        display: grid;
        /* place-items: center; */
        place-content: center;
        /* color: white; */
        .title {
          font: 4rem bold;
        }
        .icon {
          outline: 2px solid red;
          height: fit-content;
          font-size: 4rem;
          /* color: white; */
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {}
