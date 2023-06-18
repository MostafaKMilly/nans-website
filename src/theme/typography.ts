import { TypographyOptions } from "@mui/material/styles/createTypography";
import { FontLoader } from "next/font";
import { Open_Sans } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const typography: TypographyOptions = {
  fontFamily: openSans.style.fontFamily,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  allVariants: {
    letterSpacing: 0,
    fontWeight: 500,
  },
  h1: {
    fontFamily: openSans.style.fontFamily,
    fontSize: "2.5rem",
    fontWeight: 700,
  },
  h2: {
    fontFamily: openSans.style.fontFamily,
    fontSize: "2rem",
    fontWeight: 700,
  },
  h3: {
    fontFamily: openSans.style.fontFamily,
    fontSize: "1.75rem",
    fontWeight: 700,
  },
  h4: {
    fontFamily: openSans.style.fontFamily,
    fontSize: "1.5rem",
    fontWeight: 700,
  },
  h5: {
    fontFamily: openSans.style.fontFamily,
    fontSize: "1.25rem",
    fontWeight: 700,
  },
  h6: {
    fontFamily: openSans.style.fontFamily,
    fontSize: "1rem",
    fontWeight: 700,
  },
  body1: {
    fontFamily: openSans.style.fontFamily,
    fontSize: "1rem",
    fontWeight: 400,
  },
  body2: {
    fontFamily: openSans.style.fontFamily,
    fontSize: "0.875rem",
    fontWeight: 400,
  },
  button: {
    fontFamily: openSans.style.fontFamily,
    fontWeight: 500,
    fontSize: "0.75rem",
  },
};

export default typography;
