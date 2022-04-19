import { Period } from "../../../api/forecast";

/**
 * Slice the forecast periods in days chunks of day and night periods.
 * @param periods
 */
export const sliceForecastPeriods = (periods: Period[] | undefined) =>
  periods?.reduce<Period[][]>(
    (dayForecast, period) => {
      let lastSlice = dayForecast[dayForecast.length - 1];
      if (lastSlice.length > 1) {
        return [...dayForecast, [period]];
      }
      if (
        lastSlice.length === 0 ||
        period.name.includes(lastSlice[0]?.name) ||
        ![
          "Monday",
          "Thursday",
          "Wednesday",
          "Tuesday",
          "Friday",
          "Saturday",
          "Sunday",
        ].includes(period.name.split(" ")[0])
      ) {
        lastSlice.push(period);
      } else {
        return [...dayForecast, [period]];
      }
      return dayForecast;
    },
    [[]]
  ) ?? [];
