import { sliceForecastPeriods } from "./forecastPeriod";
import { Period } from "../../../api/forecast";

const periods = [
  {
    number: 1,
    name: "Overnight",
    startTime: new Date("2022-04-17T05:00:00-07:00"),
    endTime: new Date("2022-04-17T06:00:00-07:00"),
    isDaytime: false,
    temperature: 47,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "13 mph",
    windDirection: "W",
    icon: "https://api.weather.gov/icons/land/night/few?size=medium",
    shortForecast: "Mostly Clear",
    detailedForecast:
      "Mostly clear, with a low around 47. West wind around 13 mph.",
  },
  {
    number: 2,
    name: "Sunday",
    startTime: new Date("2022-04-17T06:00:00-07:00"),
    endTime: new Date("2022-04-17T18:00:00-07:00"),
    isDaytime: true,
    temperature: 53,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "10 to 21 mph",
    windDirection: "W",
    icon: "https://api.weather.gov/icons/land/day/wind_few?size=medium",
    shortForecast: "Sunny",
    detailedForecast:
      "Sunny, with a high near 53. West wind 10 to 21 mph, with gusts as high as 26 mph.",
  },
  {
    number: 3,
    name: "Sunday Night",
    startTime: new Date("2022-04-17T18:00:00-07:00"),
    endTime: new Date("2022-04-18T06:00:00-07:00"),
    isDaytime: false,
    temperature: 47,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "3 to 20 mph",
    windDirection: "W",
    icon: "https://api.weather.gov/icons/land/night/few?size=medium",
    shortForecast: "Mostly Clear",
    detailedForecast:
      "Mostly clear, with a low around 47. West wind 3 to 20 mph, with gusts as high as 25 mph.",
  },
  {
    number: 4,
    name: "Monday",
    startTime: new Date("2022-04-18T06:00:00-07:00"),
    endTime: new Date("2022-04-18T18:00:00-07:00"),
    isDaytime: true,
    temperature: 58,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "5 to 16 mph",
    windDirection: "WSW",
    icon: "https://api.weather.gov/icons/land/day/sct/rain,70?size=medium",
    shortForecast: "Mostly Sunny then Light Rain Likely",
    detailedForecast:
      "Rain likely after 5pm. Mostly sunny, with a high near 58. West southwest wind 5 to 16 mph, with gusts as high as 21 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible.",
  },
  {
    number: 5,
    name: "Monday Night",
    startTime: new Date("2022-04-18T18:00:00-07:00"),
    endTime: new Date("2022-04-19T06:00:00-07:00"),
    isDaytime: false,
    temperature: 53,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "8 to 16 mph",
    windDirection: "SW",
    icon: "https://api.weather.gov/icons/land/night/rain,100?size=medium",
    shortForecast: "Light Rain",
    detailedForecast:
      "Rain. Cloudy, with a low around 53. Southwest wind 8 to 16 mph, with gusts as high as 21 mph. Chance of precipitation is 100%. New rainfall amounts between a tenth and quarter of an inch possible.",
  },
  {
    number: 6,
    name: "Tuesday",
    startTime: new Date("2022-04-19T06:00:00-07:00"),
    endTime: new Date("2022-04-19T18:00:00-07:00"),
    isDaytime: true,
    temperature: 56,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "6 to 18 mph",
    windDirection: "WNW",
    icon: "https://api.weather.gov/icons/land/day/rain,30/bkn?size=medium",
    shortForecast: "Chance Light Rain then Partly Sunny",
    detailedForecast:
      "A chance of rain before 11am. Partly sunny, with a high near 56. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible.",
  },
  {
    number: 7,
    name: "Tuesday Night",
    startTime: new Date("2022-04-19T18:00:00-07:00"),
    endTime: new Date("2022-04-20T06:00:00-07:00"),
    isDaytime: false,
    temperature: 51,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "9 to 18 mph",
    windDirection: "W",
    icon: "https://api.weather.gov/icons/land/night/sct/rain,30?size=medium",
    shortForecast: "Partly Cloudy then Chance Light Rain",
    detailedForecast:
      "A chance of rain after 5am. Partly cloudy, with a low around 51. Chance of precipitation is 30%.",
  },
  {
    number: 8,
    name: "Wednesday",
    startTime: new Date("2022-04-20T06:00:00-07:00"),
    endTime: new Date("2022-04-20T18:00:00-07:00"),
    isDaytime: true,
    temperature: 57,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "7 to 15 mph",
    windDirection: "SSW",
    icon: "https://api.weather.gov/icons/land/day/rain?size=medium",
    shortForecast: "Light Rain Likely",
    detailedForecast: "Rain likely. Partly sunny, with a high near 57.",
  },
  {
    number: 9,
    name: "Wednesday Night",
    startTime: new Date("2022-04-20T18:00:00-07:00"),
    endTime: new Date("2022-04-21T06:00:00-07:00"),
    isDaytime: false,
    temperature: 52,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "10 to 15 mph",
    windDirection: "SSW",
    icon: "https://api.weather.gov/icons/land/night/rain?size=medium",
    shortForecast: "Light Rain",
    detailedForecast: "Rain. Mostly cloudy, with a low around 52.",
  },
  {
    number: 10,
    name: "Thursday",
    startTime: new Date("2022-04-21T06:00:00-07:00"),
    endTime: new Date("2022-04-21T18:00:00-07:00"),
    isDaytime: true,
    temperature: 55,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "10 to 17 mph",
    windDirection: "SSW",
    icon: "https://api.weather.gov/icons/land/day/rain?size=medium",
    shortForecast: "Rain",
    detailedForecast: "Rain. Cloudy, with a high near 55.",
  },
  {
    number: 11,
    name: "Thursday Night",
    startTime: new Date("2022-04-21T18:00:00-07:00"),
    endTime: new Date("2022-04-22T06:00:00-07:00"),
    isDaytime: false,
    temperature: 51,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "7 to 17 mph",
    windDirection: "WSW",
    icon: "https://api.weather.gov/icons/land/night/rain?size=medium",
    shortForecast: "Rain Likely",
    detailedForecast: "Rain likely. Mostly cloudy, with a low around 51.",
  },
  {
    number: 12,
    name: "Friday",
    startTime: new Date("2022-04-22T06:00:00-07:00"),
    endTime: new Date("2022-04-22T18:00:00-07:00"),
    isDaytime: true,
    temperature: 54,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "7 to 16 mph",
    windDirection: "W",
    icon: "https://api.weather.gov/icons/land/day/rain?size=medium",
    shortForecast: "Chance Light Rain",
    detailedForecast:
      "A chance of rain before 5pm. Mostly sunny, with a high near 54.",
  },
  {
    number: 13,
    name: "Friday Night",
    startTime: new Date("2022-04-22T18:00:00-07:00"),
    endTime: new Date("2022-04-23T06:00:00-07:00"),
    isDaytime: false,
    temperature: 50,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "7 to 16 mph",
    windDirection: "WNW",
    icon: "https://api.weather.gov/icons/land/night/few?size=medium",
    shortForecast: "Mostly Clear",
    detailedForecast: "Mostly clear, with a low around 50.",
  },
  {
    number: 14,
    name: "Saturday",
    startTime: new Date("2022-04-23T06:00:00-07:00"),
    endTime: new Date("2022-04-23T18:00:00-07:00"),
    isDaytime: true,
    temperature: 58,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "7 to 16 mph",
    windDirection: "WNW",
    icon: "https://api.weather.gov/icons/land/day/few?size=medium",
    shortForecast: "Sunny",
    detailedForecast: "Sunny, with a high near 58.",
  },
] as Period[];

const slicedPeriods = [
  [
    {
      number: 1,
      name: "Overnight",
      startTime: new Date("2022-04-17T05:00:00-07:00"),
      endTime: new Date("2022-04-17T06:00:00-07:00"),
      isDaytime: false,
      temperature: 47,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "13 mph",
      windDirection: "W",
      icon: "https://api.weather.gov/icons/land/night/few?size=medium",
      shortForecast: "Mostly Clear",
      detailedForecast:
        "Mostly clear, with a low around 47. West wind around 13 mph.",
    },
  ],
  [
    {
      number: 2,
      name: "Sunday",
      startTime: new Date("2022-04-17T06:00:00-07:00"),
      endTime: new Date("2022-04-17T18:00:00-07:00"),
      isDaytime: true,
      temperature: 53,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "10 to 21 mph",
      windDirection: "W",
      icon: "https://api.weather.gov/icons/land/day/wind_few?size=medium",
      shortForecast: "Sunny",
      detailedForecast:
        "Sunny, with a high near 53. West wind 10 to 21 mph, with gusts as high as 26 mph.",
    },
    {
      number: 3,
      name: "Sunday Night",
      startTime: new Date("2022-04-17T18:00:00-07:00"),
      endTime: new Date("2022-04-18T06:00:00-07:00"),
      isDaytime: false,
      temperature: 47,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "3 to 20 mph",
      windDirection: "W",
      icon: "https://api.weather.gov/icons/land/night/few?size=medium",
      shortForecast: "Mostly Clear",
      detailedForecast:
        "Mostly clear, with a low around 47. West wind 3 to 20 mph, with gusts as high as 25 mph.",
    },
  ],
  [
    {
      number: 4,
      name: "Monday",
      startTime: new Date("2022-04-18T06:00:00-07:00"),
      endTime: new Date("2022-04-18T18:00:00-07:00"),
      isDaytime: true,
      temperature: 58,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "5 to 16 mph",
      windDirection: "WSW",
      icon: "https://api.weather.gov/icons/land/day/sct/rain,70?size=medium",
      shortForecast: "Mostly Sunny then Light Rain Likely",
      detailedForecast:
        "Rain likely after 5pm. Mostly sunny, with a high near 58. West southwest wind 5 to 16 mph, with gusts as high as 21 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible.",
    },
    {
      number: 5,
      name: "Monday Night",
      startTime: new Date("2022-04-18T18:00:00-07:00"),
      endTime: new Date("2022-04-19T06:00:00-07:00"),
      isDaytime: false,
      temperature: 53,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "8 to 16 mph",
      windDirection: "SW",
      icon: "https://api.weather.gov/icons/land/night/rain,100?size=medium",
      shortForecast: "Light Rain",
      detailedForecast:
        "Rain. Cloudy, with a low around 53. Southwest wind 8 to 16 mph, with gusts as high as 21 mph. Chance of precipitation is 100%. New rainfall amounts between a tenth and quarter of an inch possible.",
    },
  ],
  [
    {
      number: 6,
      name: "Tuesday",
      startTime: new Date("2022-04-19T06:00:00-07:00"),
      endTime: new Date("2022-04-19T18:00:00-07:00"),
      isDaytime: true,
      temperature: 56,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "6 to 18 mph",
      windDirection: "WNW",
      icon: "https://api.weather.gov/icons/land/day/rain,30/bkn?size=medium",
      shortForecast: "Chance Light Rain then Partly Sunny",
      detailedForecast:
        "A chance of rain before 11am. Partly sunny, with a high near 56. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible.",
    },
    {
      number: 7,
      name: "Tuesday Night",
      startTime: new Date("2022-04-19T18:00:00-07:00"),
      endTime: new Date("2022-04-20T06:00:00-07:00"),
      isDaytime: false,
      temperature: 51,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "9 to 18 mph",
      windDirection: "W",
      icon: "https://api.weather.gov/icons/land/night/sct/rain,30?size=medium",
      shortForecast: "Partly Cloudy then Chance Light Rain",
      detailedForecast:
        "A chance of rain after 5am. Partly cloudy, with a low around 51. Chance of precipitation is 30%.",
    },
  ],
  [
    {
      number: 8,
      name: "Wednesday",
      startTime: new Date("2022-04-20T06:00:00-07:00"),
      endTime: new Date("2022-04-20T18:00:00-07:00"),
      isDaytime: true,
      temperature: 57,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "7 to 15 mph",
      windDirection: "SSW",
      icon: "https://api.weather.gov/icons/land/day/rain?size=medium",
      shortForecast: "Light Rain Likely",
      detailedForecast: "Rain likely. Partly sunny, with a high near 57.",
    },
    {
      number: 9,
      name: "Wednesday Night",
      startTime: new Date("2022-04-20T18:00:00-07:00"),
      endTime: new Date("2022-04-21T06:00:00-07:00"),
      isDaytime: false,
      temperature: 52,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "10 to 15 mph",
      windDirection: "SSW",
      icon: "https://api.weather.gov/icons/land/night/rain?size=medium",
      shortForecast: "Light Rain",
      detailedForecast: "Rain. Mostly cloudy, with a low around 52.",
    },
  ],
  [
    {
      number: 10,
      name: "Thursday",
      startTime: new Date("2022-04-21T06:00:00-07:00"),
      endTime: new Date("2022-04-21T18:00:00-07:00"),
      isDaytime: true,
      temperature: 55,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "10 to 17 mph",
      windDirection: "SSW",
      icon: "https://api.weather.gov/icons/land/day/rain?size=medium",
      shortForecast: "Rain",
      detailedForecast: "Rain. Cloudy, with a high near 55.",
    },
    {
      number: 11,
      name: "Thursday Night",
      startTime: new Date("2022-04-21T18:00:00-07:00"),
      endTime: new Date("2022-04-22T06:00:00-07:00"),
      isDaytime: false,
      temperature: 51,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "7 to 17 mph",
      windDirection: "WSW",
      icon: "https://api.weather.gov/icons/land/night/rain?size=medium",
      shortForecast: "Rain Likely",
      detailedForecast: "Rain likely. Mostly cloudy, with a low around 51.",
    },
  ],
  [
    {
      number: 12,
      name: "Friday",
      startTime: new Date("2022-04-22T06:00:00-07:00"),
      endTime: new Date("2022-04-22T18:00:00-07:00"),
      isDaytime: true,
      temperature: 54,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "7 to 16 mph",
      windDirection: "W",
      icon: "https://api.weather.gov/icons/land/day/rain?size=medium",
      shortForecast: "Chance Light Rain",
      detailedForecast:
        "A chance of rain before 5pm. Mostly sunny, with a high near 54.",
    },
    {
      number: 13,
      name: "Friday Night",
      startTime: new Date("2022-04-22T18:00:00-07:00"),
      endTime: new Date("2022-04-23T06:00:00-07:00"),
      isDaytime: false,
      temperature: 50,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "7 to 16 mph",
      windDirection: "WNW",
      icon: "https://api.weather.gov/icons/land/night/few?size=medium",
      shortForecast: "Mostly Clear",
      detailedForecast: "Mostly clear, with a low around 50.",
    },
  ],
  [
    {
      number: 14,
      name: "Saturday",
      startTime: new Date("2022-04-23T06:00:00-07:00"),
      endTime: new Date("2022-04-23T18:00:00-07:00"),
      isDaytime: true,
      temperature: 58,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "7 to 16 mph",
      windDirection: "WNW",
      icon: "https://api.weather.gov/icons/land/day/few?size=medium",
      shortForecast: "Sunny",
      detailedForecast: "Sunny, with a high near 58.",
    },
  ],
] as Period[][];

describe("forecastPeriod utilities", () => {
  test("sliceForecastPeriods slices periods without error", () => {
    const sliced = sliceForecastPeriods(periods);
    expect(sliced).toEqual(slicedPeriods);
  });
});