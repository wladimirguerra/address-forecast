import { Box, styled } from "@mui/material";
import * as React from "react";
import { ForecastPanel } from "../ForecastPanel/ForecastPanel";

export interface DayForecastPanelProps {}

const ForecastDayPanel = styled(Box)({
  "& > :not(style)": {
    width: 220,
    height: 250,
  },
});

export const DayForecastPanel: React.FC<DayForecastPanelProps> = (props) => {
  const {} = props;

  return (
    <ForecastDayPanel>
      <ForecastPanel day></ForecastPanel>
      <ForecastPanel></ForecastPanel>
    </ForecastDayPanel>
  );
};
