"use client";
import API from "@/api/client";
import { useQuery } from "@tanstack/react-query";
import { ServicesResponse } from "../_types/service.type";
import { Loader } from "../_components/Loader";
import { Box, Paper, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "../_hooks/useTranslations";

export default function ServicesPage() {
  const { data: services, isLoading: isServicesLoading } = useQuery(
    ["services"],
    () => API.get<ServicesResponse>("service"),
    {
      select: (res) => res.data,
    }
  );
  const { t } = useTranslations();

  if (isServicesLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <Paper elevation={0} sx={{ bgcolor: "#FFD740", borderRadius: 0, py: 4 }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: {
              xs: "wrap",
              md: "nowrap",
            },
            overflowX: "hidden",
            rowGap: 2,
          }}
        >
          <Box>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ color: "common.black", textAlign: "center" }}
            >
              {t("services_hero")}
            </Typography>
          </Box>
          <Image
            src="/images/services.svg"
            alt="HeroImage"
            width={300}
            height={200}
          />
        </Container>
      </Paper>
      <Container
        maxWidth={false}
        sx={{ my: 4, maxWidth: "1400px !important" }}
      ></Container>
    </Box>
  );
}
