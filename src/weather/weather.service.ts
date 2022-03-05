import { Injectable } from '@nestjs/common';
@Injectable({})
export class WeatherService {
  getWeather(dto) {
    const { lat, lon, alternateSource } = dto;
    return {
      msg: `lat: ${lat}, lon: ${lon} alternateSource: ${alternateSource}`,
    };
  }
}
