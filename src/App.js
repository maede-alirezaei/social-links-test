import { CacheProvider, ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import Body from "./components/Body";

function App() {
  const theme = createTheme({
    // direction: "rtl",
    palette: {
      type: "dark",
      primary: {
        main: "#61DBA1",
        dark: "#6ae6ad",
        light: "#92ffcc",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#FB679F",
        dark: "#fb4b8e",
        light: "#FB679F",
        contrastText: "#ffffff",
      },
      background: {
        default: "#FBF9F9",
      },
      error: {
        main: "#FE1E6A",
        dark: "#ff1744",
      },
      divider: "#635F57",
      warning: {
        main: "#ffb300",
        dark: "#ffa000",
      },
      success: {
        main: "#00e676",
        dark: "#c80029",
      },
    },
    typography: {
      fontFamily: ["IranSans"].join(","),
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "contained" },
            style: {
              borderRadius: "50px",
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              borderRadius: "50px",
              contrastText: " #fff",
            },
          },
          {
            props: { variant: "text" },
            style: {
              fontSize: "smaller",
              borderRadius: "50px",
            },
          },
        ],
      },
    },
  });
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>
        <Body />
      </CacheProvider>
    </ThemeProvider>
  );
}

export default App;
