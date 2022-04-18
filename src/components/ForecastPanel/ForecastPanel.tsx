import { Air, ExploreOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Tooltip } from "@mui/material";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";
import * as React from "react";

export interface ForecastPanelContentProps {
  day?: boolean;
}

const ForecastPanelContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "day",
})<{ day?: boolean }>(({ day, theme }) => ({
  boxShadow: "4px 4px 12px grey",
  borderTopLeftRadius: day ? theme.spacing(4) : 0,
  borderTopRightRadius: day ? theme.spacing(4) : 0,
  borderBottomLeftRadius: !day ? theme.spacing(4) : 0,
  borderBottomRightRadius: !day ? theme.spacing(4) : 0,
  padding: theme.spacing(2),
  overflowY: "hidden",
  display: "flex",
  flexDirection: "column",
  background: day
    ? "linear-gradient(0deg, rgba(137,212,255,1) 0%, rgba(196,233,255,1) 45%, rgba(43,177,254,1) 100%)"
    : "linear-gradient(180deg, rgba(34,46,57,1) 0%, rgba(1,20,38,1) 45%, rgba(83,103,115,1) 100%)",
}));

const Spacer = styled(Box)(({ theme }) => ({
  minHeight: theme.spacing(1),
}));

const PanelTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "day",
})<{ day?: boolean }>(({ day, theme }) => ({
  color: day ? theme.palette.text.primary : "white",
}));

export const ForecastPanel: React.FC<ForecastPanelContentProps> = (props) => {
  const { day } = props;

  return (
    <ForecastPanelContainer day={day}>
      <PanelTypography day={day}>Rain Likely</PanelTypography>
      <PanelTypography day={day} variant={"h3"}>
        30˚F
      </PanelTypography>
      <PanelTypography day={day} variant={"subtitle2"}>
        Saturday
      </PanelTypography>
      <Spacer />
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Tooltip title={"Wind speed"}>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Air sx={{ color: day ? "inherit" : "white" }} />
            <PanelTypography day={day} variant={"body2"}>
              7 to 16 mph
            </PanelTypography>
          </Box>
        </Tooltip>
        <Tooltip title={"Wind direction"}>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <ExploreOutlined
              sx={{ color: day ? "inherit" : "white" }}
              fontSize={"small"}
            />
            <PanelTypography day={day} variant={"body2"}>
              W
            </PanelTypography>
          </Box>
        </Tooltip>
      </Box>
      <Spacer />
      <PanelTypography
        day={day}
        sx={{
          lineHeight: "1.4rem",
          maxHeight: "4.2rem",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        Rain likely. Mostly cloudy, with a low around 51. Lorem ips dofsd fsdo
        sdfo lsdfo. sdofs j sdsf sdfsd fsd sssdf fsd
      </PanelTypography>
    </ForecastPanelContainer>
  );
};
