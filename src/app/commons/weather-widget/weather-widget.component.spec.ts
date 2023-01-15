import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';

import { WeatherWidgetComponent } from '@commons/weather-widget/weather-widget.component';

describe('WeatherWidgetComponent', () => {
  let component: WeatherWidgetComponent;
  let fixture: MockedComponentFixture<WeatherWidgetComponent>;

  beforeEach(() => MockBuilder(WeatherWidgetComponent));

  beforeEach(async () => {
    fixture = MockRender(WeatherWidgetComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  // let fixture: ComponentFixture<WeatherWidgetComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [WeatherWidgetComponent],
  //   }).compileComponents();

  //   fixture = TestBed.createComponent(WeatherWidgetComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
