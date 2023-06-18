import { Components, Theme } from "@mui/material";
import { ButtonStylesOverrides } from "./Button";
import { CssBaselineStylesOverrides } from "./Cssbaseline";
import { DialogStylesOverrides } from "./Dialog";
import { MenuStylesOverrides } from "./Menu";
import { MenuItemStylesOverrides } from "./MenuItem";
import { DataGridStylesOverrides } from "./DataGrid";
import { DialogTitleStylesOverrides } from "./DialogTitle";
import "@mui/x-data-grid-pro/themeAugmentation";

export const componentsOverrides: Components<Theme> = {
  MuiButton: ButtonStylesOverrides,
  MuiMenu: MenuStylesOverrides,
  MuiMenuItem: MenuItemStylesOverrides,
  MuiCssBaseline: CssBaselineStylesOverrides,
  MuiDialog: DialogStylesOverrides,
  MuiDataGrid: DataGridStylesOverrides,
  MuiDialogTitle: DialogTitleStylesOverrides,
};
