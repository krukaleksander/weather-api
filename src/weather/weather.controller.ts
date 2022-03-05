import { Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('current_weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get('/')
  getWeather() {
    return this.weatherService.getWeather();
  }
}
