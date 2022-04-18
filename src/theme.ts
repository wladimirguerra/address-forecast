import { createTheme, ThemeOptions } from "@mui/material";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#0a9c1c",
    },
    secondary: {
      main: "#792f17",
    },
    info: {
      main: "#00bcd4",
    },
  },
};

export const theme = createTheme(themeOptions);
