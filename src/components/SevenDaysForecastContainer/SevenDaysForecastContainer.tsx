import { Box } from "@mui/material";
import * as React from "react";
import { DayForecastPanel } from "../DayForecastPanel/DayForecastPanel";
import { useAppSelector } from "../../app/hooks";
import { forecastPeriodsSelector } from "../../features/forecast/forecastSlice";
import { sliceForecastPeriods } from "../DayForecastPanel/utils/forecastPeriod";

export interface SevenDaysForecastContainerProps {}

export const SevenDaysForecastContainer: React.FC<
  SevenDaysForecastContainerProps
> = (props) => {
  const {} = props;
  const periods = useAppSelector(forecastPeriodsSelector);

  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      sx={{
        maxWidth: 968,
        "& > :not(style)": {
          m: 0.7,
        },
      }}
    >
      {sliceForecastPeriods(periods).map((dayForecastPeriods) => (
        <DayForecastPanel
          key={`${dayForecastPeriods[0]?.name}${
            dayForecastPeriods?.[1]?.name ?? ""
          }`}
          forecastPeriods={dayForecastPeriods}
        />
      ))}
    </Box>
  );
};
