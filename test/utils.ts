import forecast from "./resources/forecast.json";

export const getDayForecastMock = () => {
  return forecast.properties.periods.slice(1, 3).map((period) => {
    const { startTime, endTime, ...rest } = period;

    return {
      ...rest,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
    };
  });
};
