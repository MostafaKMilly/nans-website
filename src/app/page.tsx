"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { ServicesSection } from "./_components/ServicesSection";
import { LatestNewsSection } from "./_components/LatestNewsSection";
import { NewsLetterSubscription } from "./_components/NewsLetterSubscription";
import { LiscencedCompanies } from "./_components/LiscencedCompanies";
import { useTranslations } from "./_hooks/useTranslations";

export default function Home() {
  const { t } = useTranslations();

  return (
    <Box width="100%">
      <Box
        py={{
          xs: 4,
          md: 1,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
            overflowX: "hidden",
          }}
        >
          <Box>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ color: "common.black" }}
            >
              {t("HOME_HEO")}
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "secondary.main" }}
            >
              {t("HOME_HERO_SUBTITLE")}
            </Typography>
          </Box>
          <Image
            src="/images/home-hero-image.svg"
            alt="HeroImage"
            width={400}
            height={400}
          />
        </Container>
      </Box>
      <ServicesSection />
      <LatestNewsSection />
      <NewsLetterSubscription />
      <LiscencedCompanies />
    </Box>
  );
}
