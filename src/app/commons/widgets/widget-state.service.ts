import { Injectable } from '@angular/core';
import { sunny, WeatherData } from '@models/weather';

@Injectable()
export class WidgetState {
  data: WeatherData = {
    temperature: 20,
    windspeed: 5,
    skyCondition: sunny,
  };

  lastUpdateAt = new Date();
}
