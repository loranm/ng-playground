import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preferences',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      preferences works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreferencesComponent {

}
