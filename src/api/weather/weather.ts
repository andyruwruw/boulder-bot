// Types
import { WeatherResponseData } from '../../types';

export interface WeatherDailyForecast {
  time: number;
  weatherCode: number;
  max: number;
  min: number;
  precipitationProbability: number | null;
}

const DAYS_PRIOR = 2;
const DAYS_AFTER = 10;

/**
 * Holds weather related data.
 */
export class WeatherData {
  /**
   * Data provided by API.
   */
  _data: WeatherResponseData;

  /**
   * Instantiates a new Weather data container.
   *
   * @param {WeatherResponseData} data Weather data from API.
   */
  constructor(data: WeatherResponseData) {
    this._data = data;
  }

  /**
   * Retrieves data objects of forecast.
   *
   * @returns {WeatherDailyForecast[]} Daily forecasts or history.
   */
  getGeneralForecast(): WeatherDailyForecast[] {
    const days = [] as WeatherDailyForecast[];
    const today = Math.floor(Date.now() / 1000 / 86400);

    for (let i = 0; i < this._data.daily.time.length; i += 1) {
      const day = this._data.daily.time[i] / 86400;

      if (day > today - 3 && day < today + 10) {
        days.push({
          time: this._data.daily.time[i],
          weatherCode: this._data.daily.weathercode[i],
          max: this._data.daily.temperature_2m_max[i],
          min: this._data.daily.temperature_2m_min[i],
          precipitationProbability: this._data.daily.precipitation_probability_max[i],
        });
      }
    }

    return days;
  }
}
