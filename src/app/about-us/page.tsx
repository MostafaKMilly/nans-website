"use client";
import { Typography, Container, Box } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "../_hooks/useTranslations";

function AboutUsPage() {
  const { t } = useTranslations();

  return (
    <Container maxWidth="xl" sx={{ pb: 3 }}>
      <Typography variant="h2" gutterBottom>
        {t("ABOUT_US")}
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        px={4}
        rowGap={2}
        sx={{
          flexWrap: {
            xs: "wrap",
            md: "nowrap",
          },
        }}
      >
        <Typography>{t("ABOUT_US_INTRO")}</Typography>
        <Image
          src={"/images/aboutus.svg"}
          alt="Placeholder"
          width={400}
          height={200}
        />
      </Box>
      <Typography variant="h5" component="h3" gutterBottom>
        {t("General_Objectives")}:
      </Typography>
      <Typography sx={{ mb: 2 }}>
        <div dangerouslySetInnerHTML={{ __html: t("goals") }} />
      </Typography>

      <Typography variant="h5" component="h3" gutterBottom>
        {t("tasks")}:
      </Typography>
      <Typography sx={{ mb: 2 }}>
        <div dangerouslySetInnerHTML={{ __html: t("tasks_list") }} />
      </Typography>
    </Container>
  );
}

export default AboutUsPage;
