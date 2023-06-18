import { ThemeOptions } from "@mui/material";
import { componentsOverrides } from "./overrides";
import { palette } from "./palette";
import { shadows } from "./shadows";
import typography from "./typography";

export const theme: ThemeOptions = {
  palette: palette,
  shadows: shadows,
  components: componentsOverrides,
  typography: typography,
};
