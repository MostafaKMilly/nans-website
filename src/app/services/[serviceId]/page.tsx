"use client";
import API from "@/api/client";
import { Service, ServicesResponse } from "@/app/_types/service.type";
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ServiceForm } from "./_components/ServiceForm";
import { Loader } from "@/app/_components/Loader";
import { useTranslations } from "@/app/_hooks/useTranslations";

export default function ServicePage() {
  const params = useParams();
  const serviceId = String(params.serviceId);

  const { data: service, isLoading: isServiceLoading } = useQuery(
    ["services", serviceId],
    () => API.get<{ data: Service }>("/service/" + serviceId),
    {
      select: (res) => res.data,
    }
  );

  if (isServiceLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <Paper elevation={0} sx={{ borderRadius: 0, py: 4 }}>
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
              sx={{ color: "common.black", textAlign: "center" }}
            >
              {service?.title}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "secondary.main", textAlign: "center" }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: service?.description || "" }}
              />
            </Typography>
          </Box>
          <Image
            src="/images/service.svg"
            alt="HeroImage"
            width={300}
            height={200}
          />
        </Container>
      </Paper>
      <Paper sx={{ bgcolor: "#d2d2d2", color: "common.white", p: 4 }}>
        <Container
          maxWidth={false}
          sx={{ my: 4, maxWidth: "1400px !important" }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="space-evenly"
            alignItems="left"
          >
            <Grid item xs={12} sm={4}>
              <ServiceForm
                serviceForm={service?.serviceForm}
                id={service?.id}
              />
            </Grid>
            <Divider
              flexItem
              orientation="vertical"
              sx={{
                border: ({ palette }) => `1px solid ${palette.secondary.main}`,
              }}
            />
            <Grid
              item
              xs={12}
              sm={5.8}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/images/service_form.svg"
                width={330}
                height={305}
                alt="serviceForm"
              />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Box>
  );
}
