"use client";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
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
      <Typography variant="body2" sx={{ color: "common.white" }}>
        All rights reserved . National Agency for Network Services{" "}
        {new Date().getFullYear()} ©
      </Typography>
    </Box>
  );
};
