"use client";
import { Box, Container, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "../_hooks/useTranslations";

export default function NewsPage() {
  const { t } = useTranslations();

  return (
    <Box>
      <Paper elevation={0} sx={{ bgcolor: "#6D71D2", borderRadius: 0, py: 4 }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
            overflowX: "hidden",
            rowGap: 2,
          }}
        >
          <Box>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ color: "common.white", textAlign: "center" }}
            >
              {t("news.hero")}
            </Typography>
          </Box>
          <Image
            src="/images/news_hero.svg"
            alt="HeroImage"
            width={300}
            height={200}
          />
        </Container>
      </Paper>
    </Box>
  );
}
