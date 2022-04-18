import { Grid, Link, styled, Typography } from "@mui/material";
import React from "react";
import { SevenDaysForecastContainer } from "./components/SevenDaysForecastContainer/SevenDaysForecastContainer";
import { AddressSearch } from "./components/AddressSearch/AddressSearch";

const TitleGridItem = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(2),
}));

const ForecastGridItem = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

function App() {
  return (
    <Grid container alignItems={"center"} direction={"column"} spacing={4}>
      <TitleGridItem item>
        <Typography variant={"h1"}>Address Forecast</Typography>
      </TitleGridItem>
      <Grid item>
        {" "}
        <Typography variant={"subtitle1"}>
          Get the 7-days forecast from the{" "}
          <Link
            href={"https://www.weather.gov/"}
            target={"_blank"}
            rel={"noreferrer"}
          >
            National Weather Service
          </Link>
        </Typography>
      </Grid>
      <Grid item>
        <AddressSearch />
      </Grid>
      <ForecastGridItem item>
        <SevenDaysForecastContainer />
      </ForecastGridItem>
    </Grid>
  );
}

export default App;
