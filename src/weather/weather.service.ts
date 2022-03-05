import { Injectable } from '@nestjs/common';
require('dotenv').config();
const axios = require('axios');

@Injectable({})
export class WeatherService {
  async getWeather(dto) {
    const { lat, lon, alternateSource } = dto;

    const options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
      params: { lon: lon, lat: lat },
      headers: {
        'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
        'x-rapidapi-key': process.env.WEATHERBIT_KEY,
      },
    };
    try {
      const response = await axios.request(options);
      const data = response.data;
      const { temp: temperature, rh: humidity, pres: pressure } = data.data[0];
      return { status: 'ok', temperature, humidity, pressure };
    } catch (error) {
      return { error };
    }
  }
}
