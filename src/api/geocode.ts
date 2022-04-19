import axios from "axios";

export interface GeocodeCoordinate {
  /**
   * Longitude
   */
  x: number;
  /**
   * Latitude
   */
  y: number;
}

export interface GeocodeAddress {
  matchedAddress: string;
  coordinates: GeocodeCoordinate;
}

export interface GeocodeResult {
  result: {
    addressMatches: GeocodeAddress[];
  };
}

export const getGeocode = async (address: string): Promise<GeocodeResult> => {
  const result = await axios.get<GeocodeResult>(
    `https://secret-basin-10083.herokuapp.com/https://geocoding.geo.census.gov/geocoder/locations/onelineaddress`,
    {
      params: {
        address,
        benchmark: "Public_AR_Current",
        format: "json",
      },
    }
  );

  return result.data;
};
