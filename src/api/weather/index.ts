// Packages
import axios from 'axios';

// Local Imports
import {
  WEATHER_API_BASE_URL,
  WEATHER_BASE_PARAMS,
} from '../../config/weather';
import { WeatherData } from './weather';

/**
 * Retrieves the weather for a location.
 *
 * @param {number} longitude Longitude of location.
 * @param {number} latitude Latitude of location.
 * @returns {Promise<any>} Weather response.
 */
const getWeather = async (
  longitude: number,
  latitude: number,
): Promise<WeatherData | null> => {
  try {
    const params = new URLSearchParams();

    params.append('latitude', `${latitude}`);
    params.append('longitude', `${longitude}`);

    for (let i = 0; i < WEATHER_BASE_PARAMS.length; i += 1) {
      params.append(WEATHER_BASE_PARAMS[i][0], WEATHER_BASE_PARAMS[i][1]);
    }

    const response = await axios.get(`${WEATHER_API_BASE_URL}?${params.toString()}`);

    if (response.status === 200) {
      return new WeatherData(response.data);
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export default {
  getWeather,
};
