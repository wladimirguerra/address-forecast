import { Air, ExploreOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Tooltip } from "@mui/material";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";
import * as React from "react";
import { useForecastPeriodValues } from "../provider/ForecastPeriodProvider";

export interface ForecastPanelContentProps {
  single?: boolean;
}

const ForecastPanelContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    typeof prop === "string" && !["day", "single"].includes(prop),
})<{ day?: boolean; single?: boolean }>(({ day, single, theme }) => ({
  boxShadow: "4px 4px 12px grey",
  borderTopLeftRadius: single ? theme.spacing(4) : day ? theme.spacing(4) : 0,
  borderTopRightRadius: single ? theme.spacing(4) : day ? theme.spacing(4) : 0,
  borderBottomLeftRadius: single
    ? theme.spacing(4)
    : !day
    ? theme.spacing(4)
    : 0,
  borderBottomRightRadius: single
    ? theme.spacing(4)
    : !day
    ? theme.spacing(4)
    : 0,
  padding: theme.spacing(2),
  overflowY: "hidden",
  display: "flex",
  flexDirection: "column",
  background: day
    ? "linear-gradient(0deg, rgba(137,212,255,1) 0%, rgba(196,233,255,1) 45%, rgba(43,177,254,1) 100%)"
    : "linear-gradient(180deg, rgba(34,46,57,1) 0%, rgba(1,20,38,1) 45%, rgba(83,103,115,1) 100%)",
}));

const Spacer = styled(Box)(({ theme }) => ({
  minHeight: theme.spacing(2),
}));

const PanelTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "day",
})<{ day?: boolean }>(({ day, theme }) => ({
  color: day ? theme.palette.text.primary : "white",
}));

export const ForecastPanel: React.FC<ForecastPanelContentProps> = (props) => {
  const { single } = props;
  const {
    isDaytime,
    shortForecast,
    temperature,
    temperatureUnit,
    name,
    windSpeed,
    windDirection,
    detailedForecast,
  } = useForecastPeriodValues();

  return (
    <ForecastPanelContainer day={isDaytime} single={single}>
      <PanelTypography day={isDaytime} variant={"subtitle2"}>
        {name}
      </PanelTypography>
      <PanelTypography day={isDaytime} variant={"h3"}>
        {temperature}˚{temperatureUnit}
      </PanelTypography>
      <PanelTypography day={isDaytime} variant={"body2"} noWrap>
        {shortForecast}
      </PanelTypography>
      <Spacer />
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Tooltip title={"Wind speed"}>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Air sx={{ color: isDaytime ? "inherit" : "white" }} />
            <PanelTypography day={isDaytime} variant={"body2"}>
              {windSpeed}
            </PanelTypography>
          </Box>
        </Tooltip>
        <Tooltip title={"Wind direction"}>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <ExploreOutlined
              sx={{ color: isDaytime ? "inherit" : "white" }}
              fontSize={"small"}
            />
            <PanelTypography day={isDaytime} variant={"body2"}>
              {windDirection}
            </PanelTypography>
          </Box>
        </Tooltip>
      </Box>
      <Spacer />
      <Tooltip title={detailedForecast ?? ""}>
        <PanelTypography
          day={isDaytime}
          sx={{
            lineHeight: "1.4rem",
            maxHeight: "4.2rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {detailedForecast}
        </PanelTypography>
      </Tooltip>
    </ForecastPanelContainer>
  );
};
