import { useContext } from "react";
import { AuthContext } from "../providers";

export const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
};
