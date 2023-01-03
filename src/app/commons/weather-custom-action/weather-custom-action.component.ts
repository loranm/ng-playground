import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WeatherWidgetComponent } from '@commons/weather-widget/weather-widget.component';

@Component({
  selector: 'app-weather-custom-action',
  standalone: true,
  template: ` <button (click)="onClick()">Reload</button> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherCustomActionComponent {
  #weatherWidget = inject(WeatherWidgetComponent);

  onClick() {
    this.#weatherWidget.actions.reload();
  }
}
