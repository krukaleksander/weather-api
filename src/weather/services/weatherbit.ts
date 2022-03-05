require('dotenv').config();
const axios = require('axios');

export const WeatherBitService = async (lat: string, lon: string) => {
  const options = {
    method: 'GET',
    url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
    params: { lon: lon, lat: lat },
    headers: {
      'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY,
    },
  };
  try {
    const response = await axios.request(options);
    const data = response.data;
    const {
      temp: temperature,
      rh: humidity,
      pres: pressure,
      wind_spd: windSpeed,
    } = data.data[0];
    return {
      status: 'ok',
      temperature,
      humidity,
      pressure,
      windSpeed,
      source: 'Weatherbit',
    };
  } catch (error) {
    return { error };
  }
};
