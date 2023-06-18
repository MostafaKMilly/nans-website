"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
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
          }}
        >
          <Box>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ color: "common.black" }}
            >
              National Agency for Network Services
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "secondary.main" }}
            >
              We provide domains and hosting services
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
    </Box>
  );
}
