import { createTheme, colors } from "@mui/material";
import shadows from "./shadows";
import typography from "./typography";

const white = "#FFFFFF";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 70,
          textTransform: "inherit",
        },
        sizeSmall: {
          fontSize: 12,
          height: "2rem",
          padding: "2px 20px",
        },
        sizeMedium: {
          fontSize: 14,
          padding: "7px 33px",
          height: "2.25rem",
        },
        sizeLarge: {
          fontSize: 18,
          padding: "5px 32px",
          height: "2.5rem",
        },
      },
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          color: "rgba(0, 0, 0, 0.87)",
          "& .MuiPickersDay-root": {
            color: "rgba(0, 0, 0, 0.87)",
          },
          "& .MuiYearPicker-root": {
            color: "rgba(0, 0, 0, 0.87)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: 10,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      sd: 1100, // small desktops
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      dark: "#F4F6F8",
      light: " #f5f8fc",
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      contrastText: white,
      dark: "#005f1d",
      main: "#00892A",
      light: "#33a054",
    },
    secondary: {
      contrastText: white,
      dark: "#13542e",
      main: "#1C7943",
      light: "#499368",
    },
    tertiary: {
      contrastText: white,
      dark: "#13542e",
      main: "#FF2A58",
      light: "#499368",
    },
    sector: {
      contrastText: white,
      dark: "#13542e",
      main: "#9A4D00",
      light: "#499368",
    },
    success: {
      main: "#2CB34A",
      background: "rgba(56, 161, 105, 0.1)",
    },
    create: {
      main: "#477067",
      background: "rgba(71, 112, 103, 0.08)",
    },
    update: {
      main: "#637ED5",
      background: "rgba(99, 126, 213, 0.08)",
    },
    delete: {
      main: "#E93755",
      background: "rgba(233, 55, 85, 0.08)",
    },
    warning: {
      main: "#FFC700",
      background: "rgba(255, 199, 0, 0.1)",
    },
    error: {
      main: "#EF373E",
      background: "rgba(233, 55, 85, 0.05)",
    },
    text: {
      primary: "#262626",
      secondary: "#1a1a1a",
      dark: "#515151",
      link: "#00892A",
      textGray: "#475569",
      textMidGray: "#637381",
      textLightray: "#AAAAAA",
    },
    white: {
      main: white,
    },
    black: {
      main: "#000000",
    },
    border: {
      main: "#e7e7e7",
    },
    culturedTable: {
      background: "#F4F6F8",
      text: "#637381",
    },
    icon: colors.blueGrey[600],
    divider: colors.grey[200],
    red: colors.red[700],
    magentaBackground: "rgba(172, 15, 198, 0.05)",
    magentaIcon: "#AC0FC6",
    linen: "#FFECE8",
    coralRed: "#F53F3F",
    honeyBackground: "#E8FFEA",
    kellyGreenBackground: "rgba(82, 196, 26, 0.05)",
    blue: {
      main: "#165DFF",
      background: "rgba(22, 93, 255, 0.1)",
      tiffanyBlue: "#0FC6C2",
      tiffanyBlueBackground: "rgba(15, 198, 194, 0.1)",
    },
    greyShade: {
      main: "#5E6165",
      background: "rgba(94, 97, 101, 0.1)",
    },
  },
  shadows,
  typography,
});

export default theme;
