import { Components, Theme } from "@mui/material";

export const DataGridStylesOverrides: Components<Theme>["MuiDataGrid"] = {
  defaultProps: {
    density: "standard",
    rowHeight: 48,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      boxShadow: theme.shadows[1],
      borderRadius: "4px 4px 6px 6px",
      border: "none",
    }),
    columnSeparator: {
      display: "none",
    },
    columnHeaders: ({ theme }) => ({
      backgroundColor: `${theme.palette.grey[100]}`,
      borderBottom: `1px solid ${theme.palette.grey[200]} `,
      color: theme.palette.common.black,
      boxShadow: "none",
    }),
    columnHeader: {
      outline: "none !important",
    },
    columnHeaderTitle: ({ theme }) => ({
      color: `${theme.palette.common.black}`,
      textTransform: "uppercase",
      font: "normal 700 12px 'Open Sans', 'Roboto'",
    }),
    cellContent: ({ theme }) => ({
      color: `${theme.palette.common.black}`,
      fontWeight: "regular",
      ...theme.typography.body2,
    }),
    cell: {
      outline: "none !important",
    },
    virtualScrollerContent: {
      ackground: "#FFFFFF",
    },
    virtualScrollerRenderZone: {
      "& .MuiDataGrid-row.Mui-selected ,.MuiDataGrid-row:hover ": {
        background: "linear-gradient(0deg, #ECF2FA, #ECF2FA), #FFFFFF;",
      },
    },
    footerContainer: {
      border: "none",
    },
    actionsCell: ({ theme }) => ({
      "& svg": {
        color: `${theme.palette.primary.main} !important`,
        transform: "rotate(90deg)",
      },
      "& .MuiButtonBase-root": {
        backgroundColor: theme.palette.grey[100],
        borderRadius: 4,
      },
    }),
  },
};
