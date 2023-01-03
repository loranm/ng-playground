import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'core',
  standalone: true,
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreComponent {}
