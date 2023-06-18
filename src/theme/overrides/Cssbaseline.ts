import { Components, Theme } from "@mui/material";

export const CssBaselineStylesOverrides: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: {
    "html , body": {
      margin: 0,
      padding: 0,
      height: "100%",
      backgroundColor: "#FCFCFC",
    },
    "&": {
      scrollbarWidth: "thin",
      scrollbarColor: "#bfbfbf transparent",
    },
    "&::-webkit-scrollbar": {
      width: "7px",
      height: "7px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
      borderRadius: "20px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#bfbfbf",
      borderRadius: "20px",
    },
  },
};
