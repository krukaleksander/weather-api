import { Injectable } from '@nestjs/common';
import { WeatherBitService } from './services/weatherbit';

@Injectable({})
export class WeatherService {
  async getWeather(dto) {
    const { lat, lon, alternateSource } = dto;
    if (!alternateSource) return WeatherBitService(lat, lon);
  }
}
