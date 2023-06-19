"use client";
import API from "@/api/client";
import { Loader } from "@/app/_components/Loader";
import { ServicesResponse } from "@/app/_types/service.type";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { Box, Paper, Container, Typography, Stack } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "@/app/_hooks/useTranslations";
import { Department } from "@/app/_types/department.type";

export default function DepartmentPage() {
  const params = useParams();
  const departmentId = String(params.departmentId);
  const { t } = useTranslations();
  const { data: services, isLoading: isServicesLoading } = useQuery(
    ["departments", departmentId],
    () => API.get<ServicesResponse>(`service/department/${departmentId}`),
    {
      select: (res) => res.data,
    }
  );
  const { data: department } = useQuery(
    ["department", departmentId],
    () => API.get<{ data: Department }>("/department/" + departmentId),
    {
      select: (res) => res.data,
    }
  );

  if (isServicesLoading) {
    return <Loader />;
  }

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
              {department?.title}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "secondary.main", textAlign: "center" }}
            >
              {department?.description}
            </Typography>
          </Box>
          <Image
            src="/images/department.svg"
            alt="HeroImage"
            width={300}
            height={200}
          />
        </Container>
      </Paper>
      <Container maxWidth={false} sx={{ my: 4, maxWidth: "1400px !important" }}>
        <Typography variant="h5" align="center" gutterBottom>
          {t("department_services")}
        </Typography>
        <Box mt={2}>
          <Stack
            gap={2}
            flexWrap="wrap"
            direction="row"
            justifyContent="center"
          >
            {services?.records.map((service) => (
              <Paper
                key={service.id}
                sx={{
                  width: "440px",
                  height: "60px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  p: 4,
                  cursor: "pointer",
                }}
              >
                <Box
                  width="15px"
                  height="60px"
                  position="absolute"
                  sx={{ bgcolor: "primary.main", left: 0 }}
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "common.black", textAlign: "left" }}
                >
                  {service?.title}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
