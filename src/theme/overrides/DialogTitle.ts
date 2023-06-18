import { Components, Theme } from "@mui/material";

export const DialogTitleStylesOverrides: Components<Theme>["MuiDialogTitle"] = {
  defaultProps: {
    component: "h3",
  },
};
