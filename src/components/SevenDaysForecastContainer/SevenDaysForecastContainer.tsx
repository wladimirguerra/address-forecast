import { Box } from "@mui/material";
import * as React from "react";
import { DayForecastPanel } from "../DayForecastPanel/DayForecastPanel";

export interface SevenDaysForecastContainerProps {}

export const SevenDaysForecastContainer: React.FC<
  SevenDaysForecastContainerProps
> = (props) => {
  const {} = props;

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
      <DayForecastPanel />
      <DayForecastPanel />
      <DayForecastPanel />
      <DayForecastPanel />
      <DayForecastPanel />
      <DayForecastPanel />
      <DayForecastPanel />
    </Box>
  );
};
