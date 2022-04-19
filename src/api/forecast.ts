import axios from "axios";
import { GeocodeCoordinate } from "./geocode";

export interface ForecastGrid {
  id: string;
  latitude: number;
  longitude: number;
  properties: {
    forecast: string;
    forecastHourly: string;
    timeZone: string;
  };
}

export interface Period {
  number: number;
  name: string;
  startTime: Date;
  endTime: Date;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
  temperatureTrend: number | null;
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}

export interface Forecast {
  properties: {
    updated: Date;
    units: string;
    periods: Period[];
  };
}

/**
 * Fetch the forecast grid object for the geo-coordinates from The Weather API.
 *
 * The result data is not the forecast but the forecast grid metadata that can be cached to speedup
 * the next query on these coordinates.
 *
 * @param coordinates geo-coordinates
 * @return the forecast grid related to the geo coordinates.
 */
export const getForecastGrid = async (
  coordinates: GeocodeCoordinate
): Promise<ForecastGrid> => {
  return {
    ...(
      await axios.get<ForecastGrid>(
        `https://api.weather.gov/points/${coordinates.y},${coordinates.x}`
      )
    ).data,
    latitude: coordinates.y,
    longitude: coordinates.x,
  };
};

/**
 * Fetch the forecast for the forecast grid.
 *
 * @param grid
 * @return The forecast data
 */
export const getForecast = async (grid: ForecastGrid): Promise<Forecast> => {
  return (await axios.get<Forecast>(grid.properties.forecast)).data;
};
