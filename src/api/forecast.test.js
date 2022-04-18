import { getForecastGrid } from "./forecast";
import axios from "axios";

jest.mock("axios");

describe("forecast api", () => {
  test("getForecastGrid must return correct latitude and longitude", async () => {
    const latitude = 33;
    const longitude = -47;
    axios.get.mockResolvedValueOnce({ data: {} });
    const response = await getForecastGrid({ x: longitude, y: latitude });

    expect(response.latitude).toEqual(latitude);
    expect(response.longitude).toEqual(longitude);
  });
});
