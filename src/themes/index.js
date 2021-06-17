import defaultTheme from "./default";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import dbhelvethaicamon from "../assets/fonts/db-helvethaicamon.ttf";

const helvethaicamon = {
  fontFamily: "dbhelvethaicamon",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
      local('dbhelvethaicamon'),
      local('dbhelvethaicamon-Regular'),
      url(${dbhelvethaicamon}) format('ttf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const overrides = {
  typography: {
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.64rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.285rem",
    },
    h6: {
      fontSize: "1.142rem",
    },
    caption: {
      fontSize: "1.5rem",
    },
    fontFamily: "dbhelvethaicamon, Arial",
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [helvethaicamon],
        },
      },
    },
  },
};

const themes = {
  default: responsiveFontSizes(
    createMuiTheme({ ...defaultTheme, ...overrides })
  ),
};

export default themes;
