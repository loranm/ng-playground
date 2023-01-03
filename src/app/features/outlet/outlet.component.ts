import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
    WeatherCustomActionComponent
} from '@commons/weather-custom-action/weather-custom-action.component';
import { WeatherWidgetComponent } from '@commons/weather-widget/weather-widget.component';

@Component({
  standalone: true,
  imports: [WeatherWidgetComponent, WeatherCustomActionComponent],
  template: `
    <section class="outlet">
      <weather-widget
        [headerTemplate]="altHeader"
        [contentTemplate]="altContent"
        [actionsTemplate]="altActions"
      ></weather-widget>
      <ng-template #altHeader>
        <div class="alt-header">
          <h2>Today's weather</h2>
        </div>
      </ng-template>

      <ng-template #altContent let-state>
        <div>
          <span> 🌡️ {{ state.data.temperature }} C</span>&nbsp;- <span>{{ state.data.skyCondition }}</span
          >&nbsp;-
          <span>🌬️ {{ state.data.windspeed }} m/s</span>
        </div>
      </ng-template>

      <ng-template #altActions>
        <app-weather-custom-action></app-weather-custom-action>
      </ng-template>
    </section>
  `,
  styles: [
    `
      .outlet {
        margin-inline: auto;
        margin-block: 10rem;
        width: min(90%, 750px);
        display: grid;
        grid-template-columns: minmax(0, 1fr);
      }

      .alt-header {
        color: lightblue;
      }
      .actions {
        display: flex;
        justify-content: center;
        gap: 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutletComponent {}
