import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizeDirective } from '../directives/pet-name.directive';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content select="[name]"></ng-content> `,
  styleUrls: ['./pet-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetCardComponent {}
