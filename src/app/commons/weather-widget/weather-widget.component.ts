import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
    ChangeDetectionStrategy, Component, inject, Injector, Input, TemplateRef
} from '@angular/core';
import { WidgetActions } from '@commons/widgets/widget-actions.service';
import { WidgetState } from '@commons/widgets/widget-state.service';
import { cloudy, SkyCondition, sunny } from '@models/weather';

@Component({
  selector: 'weather-widget',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <div class="widget-header">
      <ng-container [ngTemplateOutlet]="headerTemplate || defaultWidgetHeader"></ng-container>
      <ng-template #defaultWidgetHeader>
        <div class="widget-title">Weather Forecast</div>
        <div class="widget-sub-title">Current weather in your location</div>
      </ng-template>
    </div>
    <div class="widget-content">
      <ng-container
        [ngTemplateOutlet]="contentTemplate || defaultContent"
        [ngTemplateOutletContext]="{ $implicit: state }"
      ></ng-container>
      <ng-template #defaultContent>
        <div class="sky-condition">
          {{ skyCondition }}
        </div>
        <div class="temperature">{{ state.data.temperature }}°C</div>
      </ng-template>
    </div>
    <div class="widget-actions">
      <ng-container [ngTemplateOutlet]="actionsTemplate || defaultActions" [ngTemplateOutletInjector]="injector">
        <ng-template #defaultActions>
          <button (click)="actions.reload()">Reload</button>
          <button (click)="actions.copyData()">Copy Info</button>
        </ng-template>
      </ng-container>
    </div>
  `,
  styleUrls: ['./weather-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [WidgetActions, WidgetState],
})
export class WeatherWidgetComponent {
  state = inject(WidgetState);
  actions = inject(WidgetActions);
  injector = inject(Injector);

  @Input() headerTemplate!: TemplateRef<any>;
  @Input() contentTemplate!: TemplateRef<WidgetState>;
  @Input() actionsTemplate!: TemplateRef<any>;

  get skyCondition(): '☀️' | '☁️' {
    const skyConditions: Record<SkyCondition, '☁️' | '☀️'> = {
      [cloudy]: '☁️',
      [sunny]: '☀️',
    };

    return skyConditions[this.state.data.skyCondition];
  }
}
