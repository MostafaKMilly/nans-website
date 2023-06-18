import { alpha, Components, Theme } from "@mui/material";

export const ButtonStylesOverrides: Components<
  Omit<Theme, "components">
>["MuiButton"] = {
  defaultProps: {
    disableRipple: true,
    disableElevation: true,
    disableTouchRipple: true,
    disableFocusRipple: true,
    variant: "contained",
    size: "medium",
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 4,
      paddingRight: ownerState.endIcon ? 4 : 12,
      paddingLeft: ownerState.startIcon ? 4 : 12,
      textTransform: "initial",
      minHeight: 36,
      "& .MuiButton-startIcon , .MuiButton-endIcon": {
        padding: 4,
        "& svg": {
          fontSize: "medium",
        },
      },
    }),
    fullWidth: {
      paddingTop: "16px",
      paddingBottom: "16px",
    },
    contained: ({ ownerState, theme }) => {
      const color = ownerState.color ?? "inherit";
      return {
        "&:disabled": {
          backgroundColor:
            color === "inherit"
              ? "inherit"
              : alpha(theme.palette[color].main, 0.5),
          color: "#fff",
        },
      };
    },
    outlined: ({ ownerState, theme }) => {
      const color = ownerState.color ?? "inherit";
      return {
        "&:disabled": {
          borderColor:
            color === "inherit"
              ? "inherit"
              : alpha(theme.palette[color].main, 0.5),
          color:
            color === "inherit"
              ? "inherit"
              : alpha(theme.palette[color].main, 0.5),
        },
      };
    },
  },
};
