"use client";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "../_hooks/useTranslations";

export const Footer = () => {
  const { t } = useTranslations();

  return (
    <Box
      width="100%"
      py={1}
      sx={{
        bgcolor: "common.black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: "auto",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "common.white",
          fontSize: {
            xs: 11,
            md: 14,
          },
        }}
      >
        {t("copyright") + " "} {new Date().getFullYear()} ©
      </Typography>
    </Box>
  );
};
