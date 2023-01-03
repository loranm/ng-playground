import { SkyCondition } from '@models/weather/SkyCondition';

export type WeatherData = {
  temperature: number;
  windspeed: number;
  skyCondition: SkyCondition;
};
