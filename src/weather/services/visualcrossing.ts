require('dotenv').config();
const axios = require('axios');

export const VisualCrossingService = async (lat: string, lon: string) => {
  const options = {
    method: 'GET',
    url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
    params: {
      aggregateHours: '24',
      location: `${lat}, ${lon}`,
      contentType: 'json',
      unitGroup: 'metric',
      shortColumnNames: '0',
    },
    headers: {
      'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY,
    },
  };
  try {
    const response = await axios.request(options);
    const data = response.data;
    const locations = data.locations[Object.keys(data.locations)[0]];
    const {
      temp: temperature,
      humidity,
      sealevelpressure: pressure,
      wspd: windSpeed,
    } = locations.values[0];
    return {
      status: 'ok',
      temperature: { value: temperature, unit: 'Celsius' },
      humidity: { value: humidity, unit: null },
      pressure: { value: pressure, unit: 'millibars' },
      windSpeed: { value: windSpeed, unit: 'kilometer per hour ' },
      source: 'Visual Crossing Weather',
    };
  } catch (error) {
    return { status: 'error', error };
  }
};
