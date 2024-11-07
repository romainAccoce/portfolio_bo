import { createTheme } from "@mui/material/styles";

export const colors = {
  dark: "#181818",
  lightDark: "#1d1d1d",
  grey: "#808080",
  light: "#FFFFDB",
  highlightBlue: "#379E8C",
  highlightYellow: "#C59C15",
  lightGrey: "#f4f3ef",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.highlightBlue,
    },
    secondary: {
      main: colors.highlightYellow,
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          left: 0,
          width: ".5rem",
          borderRadius: "0 .5rem .5rem 0"
        },
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          marginRight: "auto",
          gap: ".5rem",
          padding: "0rem 2rem 0rem 2rem",
          textTransform: "capitalize",
        }
      },
    },
  }
});
