import { Injectable } from '@nestjs/common';
@Injectable({})
export class WeatherService {
  getWeather() {
    return { msg: 'Sending weather details =)' };
  }
}
