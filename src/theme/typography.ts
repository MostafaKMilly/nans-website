import { TypographyOptions } from "@mui/material/styles/createTypography";
import { Cairo } from "next/font/google";

export const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const typography: TypographyOptions = {
  fontFamily: cairo.style.fontFamily,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  allVariants: {
    letterSpacing: 0,
    fontWeight: 500,
  },
  h1: {
    fontFamily: cairo.style.fontFamily,
    fontSize: "2.5rem",
    fontWeight: 700,
    "@media (max-width: 600px)": {
      fontSize: "2rem",
    },
  },
  h2: {
    fontFamily: cairo.style.fontFamily,
    fontSize: "2rem",
    fontWeight: 700,
    "@media (max-width: 600px)": {
      fontSize: "1.75rem",
    },
  },
  h3: {
    fontFamily: cairo.style.fontFamily,
    fontSize: "1.75rem",
    fontWeight: 700,
    "@media (max-width: 600px)": {
      fontSize: "1.5rem",
    },
  },
  h4: {
    fontFamily: cairo.style.fontFamily,
    fontSize: "1.5rem",
    fontWeight: 700,
    "@media (max-width: 600px)": {
      fontSize: "1.25rem",
    },
  },
  h5: {
    fontFamily: cairo.style.fontFamily,
    fontSize: "1.25rem",
    fontWeight: 700,
    "@media (max-width: 600px)": {
      fontSize: "1.125rem",
    },
  },
  h6: {
    fontFamily: cairo.style.fontFamily,
    fontSize: "1rem",
    fontWeight: 700,
    "@media (max-width: 600px)": {
      fontSize: "0.875rem",
    },
  },
  body1: {
    fontFamily: cairo.style.fontFamily,
    fontSize: "1rem",
    fontWeight: 400,
    "@media (max-width: 600px)": {
      fontSize: "0.875rem",
    },
  },
  body2: {
    fontFamily: cairo.style.fontFamily,
    fontSize: "0.875rem",
    fontWeight: 400,
    "@media (max-width: 600px)": {
      fontSize: "0.75rem",
    },
  },
  button: {
    fontFamily: cairo.style.fontFamily,
    fontWeight: 500,
    fontSize: "0.75rem",
    "@media (max-width: 600px)": {
      fontSize: "0.625rem",
    },
  },
};

export default typography;
