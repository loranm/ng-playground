import { inject, Injectable } from '@angular/core';
import { WidgetState } from '@commons/widgets/widget-state.service';

@Injectable()
export class WidgetActions {
  state = inject(WidgetState, { self: true });

  reload(): void {
    console.log('Reloads widget data...');
    this.state.lastUpdateAt = new Date();
  }

  copyData(): void {
    console.log('copy data into clipboard');
  }
}
