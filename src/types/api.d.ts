/**
 * What type of item the web scrapper should provide.
 */
export type SelectType = 'string' | 'number';

/**
 * Scraped Mountain Project element.
 */
export interface MountainProjectItem {
  /**
   * Item's name.
   */
  name: string | null;

  /**
   * Link retrieved.
   */
  href: string | null;

  /**
   * Type of item.
   */
  type: string | null;

  /**
   * Whether this item is route.
   */
  isRoute: boolean;

  /**
   * Whether this item is an area.
   */
  isArea: boolean;

  /**
   * Grade of the item.
   */
  grade: string | null;

  /**
   * Rating of the item.
   */
  rating: number | null;

  /**
   * Item longitude.
   */
  longitude: number | null;

  /**
   * Item latitude.
   */
  latitude: number | null;

  /**
   * Elevation of the item.
   */
  elevation: number | null;

  /**
   * Number of page views.
   */
  pageViews: number | null;

  /**
   * First ascent if applicable.
   */
  fa: string | null;
}


export interface WeatherHourlyUnits {
  time: string;
  temperature_2m: string;
  relativehumidity_2m: string;
  precipitation_probability: string;
  precipitation: string;
  rain: string;
  showers: string;
  snowfall: string;
  snow_depth: string;
  weathercode: string;
  cloudcover: string;
}

export interface WeatherHourly {
  time: number[];
  temperature_2m: number[];
  relativehumidity_2m: number[];
  precipitation_probability: number[];
  precipitation: number[];
  rain: number[];
  showers: number[];
  snowfall: number[];
  snow_depth: number[];
  weathercode: number[];
  cloudcover: number[];
}

export interface WeatherDailyUnits {
  time: string;
  weathercode: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  sunrise: string;
  sunset: string;
  uv_index_max: string;
  uv_index_clear_sky_max: string;
  precipitation_sum: string;
  rain_sum: string;
  showers_sum: string;
  snowfall_sum: string;
  precipitation_hours: string;
  precipitation_probability_max: string;
}

export interface WeatherDaily {
  time: number[];
  weathercode: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunrise: number[];
  sunset: number[];
  uv_index_max: number[];
  uv_index_clear_sky_max: number[];
  precipitation_sum: number[];
  rain_sum: number[];
  showers_sum: number[];
  snowfall_sum: number[];
  precipitation_hours: number[];
  precipitation_probability_max: (number | null)[];
}

/**
 * Response to a weather request.
 */
export interface WeatherRequestResponse {
  /**
   * WGS84 of the center of the weather grid-cell which was used to generate this forecast. This coordinate might be a few kilometers away from the requested coordinate.
   */
  latitude: number;

  /**
   * WGS84 of the center of the weather grid-cell which was used to generate this forecast. This coordinate might be a few kilometers away from the requested coordinate.
   */
  longitude: number;

  /**
   * Generation time of the weather forecast in milliseconds. This is mainly used for performance monitoring and improvements.
   */
  generationtime_ms: number;

  /**
   * Applied timezone offset from the &timezone= parameter.
   */
  utc_offset_seconds: number;

  /**
   * Timezone identifier (e.g. Europe/Berlin) and abbreviation (e.g. CEST)
   */
  timezone: string;

  /**
   * Timezone identifier (e.g. Europe/Berlin) and abbreviation (e.g. CEST)
   */
  timezone_abbreviation: string;

  /**
   * The elevation from a 90 meter digital elevation model. This effects which grid-cell is selected (see parameter cell_selection). Statistical downscaling is used to adapt weather conditions for this elevation. This elevation can also be controlled with the query parameter elevation. If &elevation=nan is specified, all downscaling is disabled and the averge grid-cell elevation is used.
   */
  elevation: number;

  /**
   * For each selected weather variable, the unit will be listed here.
   */
  hourly_units: WeatherHourlyUnits;

  /**
   * For each selected weather variable, data will be returned as a floating point array. Additionally a time array will be returned with ISO8601 timestamps.
   */
  hourly: WeatherHourly;

  /**
   * For each selected daily weather variable, the unit will be listed here.
   */
  daily_units: WeatherDailyUnits;

  /**
   * 	For each selected daily weather variable, data will be returned as a floating point array. Additionally a time array will be returned with ISO8601 timestamps.
   */
  daily: WeatherDaily;
}
