import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';

import { WeatherWidgetComponent } from '@commons/weather-widget/weather-widget.component';
import { WidgetActions } from '@commons/widgets/widget-actions.service';
import { WidgetState } from '@commons/widgets/widget-state.service';

import { WeatherCustomActionComponent } from './weather-custom-action.component';

describe('WeatherCustomActionComponent', () => {
  let component: WeatherCustomActionComponent;
  let fixture: MockedComponentFixture<WeatherCustomActionComponent>;

  beforeEach(() =>
    MockBuilder(WeatherCustomActionComponent).provide(WeatherWidgetComponent).mock(WidgetState).mock(WidgetActions)
  );

  beforeEach(async () => {
    fixture = MockRender(WeatherCustomActionComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
