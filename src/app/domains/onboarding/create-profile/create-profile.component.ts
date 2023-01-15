import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      create-profile works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateProfileComponent {

}
