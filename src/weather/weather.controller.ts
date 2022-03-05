import { Body, Controller, Get } from '@nestjs/common';
import { WeatherDto } from './dto';
import { WeatherService } from './weather.service';

@Controller('current_weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get('/')
  getWeather(@Body() dto: WeatherDto) {
    console.log({ dto });
    return this.weatherService.getWeather();
  }
}
