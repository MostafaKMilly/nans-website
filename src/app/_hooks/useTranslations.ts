import { useContext } from "react";
import { TrnaslationContext } from "../localizationProvider";

export const useTranslations = () => {
  const value = useContext(TrnaslationContext);
  return value;
};
