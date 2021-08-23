import { createTheme } from "@material-ui/core/styles";
import { muiBreakpoints, shadows, muiOverrides } from "./MuiThemeDefaults";

const baseTheme = createTheme({
  breakpoints: muiBreakpoints,
  palette: {
    primary: {
      light: "#f3f9fc",
      main: "#002f59",
      dark: "#2e6da3",
      contrastText: "#fafafa"
    },
    secondary: {
      light: "#f3f9fe",
      main: "#2e6da3",
      dark: "#2e6da3",
      contrastText: "#fafafa"
    },
    action: {
      active: "#2e6aA3",
      disabled: "#5f5f5f",
      disabledBackground: "#eaeaea"
    },
    error: {
      light: "#fdd6d6",
      main: "#d90e0e",
      dark: "#aa171f",
      contrastText: "#ffffff"
    },
    warning: {
      light: "#fff8d2",
      main: "#ffcc00",
      dark: "#d9ad00",
      contrastText: "#333333"
    },
    info: {
      light: "#f3f9fe",
      main: "#0077b9",
      dark: "#275498",
      contrastText: "#ffffff"
    },
    success: {
      light: "#71da71",
      main: "#3ea33e",
      dark: "#2c752c",
      contrastText: "#ffffff"
    },
    text: {
      primary: "#222222",
      secondary: "#767676",
      disabled: "#cccccc",
      hint: "#767676"
    }
  }
});

const nextTheme = createTheme({
  ...baseTheme,
  typography: {
    fontFamily: "'Open Sans', sans serif",
    htmlFontSize: 16,
    fontFamilyAlt: "serif",
    h1: {
      fontSize: "26px",
      lineHeight: 1.3,
      fontWeight: 700,
      letterSpacing: 0,
      textAlign: "center",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "48px",
        lineHeight: 1.2
      }
    },
    h2: {
      fontWeight: 700,
      fontSize: "22px",
      lineHeight: 1.36,
      letterSpacing: 0,
      textAlign: "center",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "30px",
        lineHeight: 1.26
      }
    },
    h3: {
      fontWeight: 300,
      fontSize: "21px",
      lineHeight: 1.33,
      letterSpacing: 0,
      textAlign: "center",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "28px",
        lineHeight: 1.285
      }
    },
    h4: {
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: 1.35,
      letterSpacing: 0,
      textAlign: "center",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "24px",
        lineHeight: 1.3
      }
    },
    h5: {
      fontSize: "17px",
      lineHeight: 1.29,
      fontWeight: 300,
      letterSpacing: "0px",
      textAlign: "center",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "20px",
        lineHeight: 1.4
      }
    },
    h6: {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: 1.333,
      letterSpacing: "0.15px",
      textAlign: "left"
    },
    subtitle1: {
      fontFamily: "Open Sans",
      fontWeight: 300,
      fontSize: "18px",
      lineHeight: 1.333,
      letterSpacing: "0px"
    },
    subtitle2: {
      fontFamily: "Open Sans",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: 1.333,
      letterSpacing: "0px"
    },
    body1: {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: 1.375,
      letterSpacing: 0
    },
    body2: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: 1.375,
      letterSpacing: 0
    },
    button: {
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: 1.125,
      letterSpacing: 0,
      textTransform: "none"
    },
    caption: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: 1.25,
      letterSpacing: 0
    },
    overline: {
      fontWeight: 400,
      fontSize: "12px",
      letterSpacing: 0,
      lineHeight: 1.125,
      textTransform: "none"
    }
  }
});

export const theme = createTheme({
  ...nextTheme,
  shadows,
  overrides: muiOverrides(nextTheme)
});
