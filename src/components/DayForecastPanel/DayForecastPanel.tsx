import { Box, styled } from "@mui/material";
import * as React from "react";
import { ForecastPanel } from "./components/ForecastPanel";
import { Period } from "../../api/forecast";
import { ForecastPeriodProvider } from "./provider/ForecastPeriodProvider";
import { useMemo } from "react";

export interface DayForecastPanelProps {
  /**
   * An array of two periods
   */
  forecastPeriods: Period[];
}

const ForecastDayPanel = styled(Box, {
  shouldForwardProp: (prop) => prop !== "single",
})<{ single?: boolean }>(({ single }) => ({
  "& > :not(style)": {
    width: 220,
    height: single ? 500 : 250,
    boxSizing: "border-box",
  },
}));

export const DayForecastPanel: React.FC<DayForecastPanelProps> = (props) => {
  const { forecastPeriods } = props;
  const single = useMemo(() => forecastPeriods.length === 1, [forecastPeriods]);

  return (
    <ForecastDayPanel single={single}>
      {forecastPeriods?.map((period) => (
        <ForecastPeriodProvider key={period.number} value={period}>
          <ForecastPanel single={single} />
        </ForecastPeriodProvider>
      ))}
    </ForecastDayPanel>
  );
};
