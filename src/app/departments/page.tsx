"use client";
import API from "@/api/client";
import { useQuery } from "@tanstack/react-query";
import { DepartmentsResponse } from "../_types/department.type";
import { Loader } from "../_components/Loader";
import { Box, Typography, Stack, Container } from "@mui/material";
import { useTranslations } from "../_hooks/useTranslations";
import { DepartmentCard } from "./_components/DepartmentCard";

export default function DepartmentsPage() {
  const { data, isLoading } = useQuery(
    ["departments"],
    () => API.get<DepartmentsResponse>("department"),
    {
      select: (res) => res.data,
    }
  );
  const { t } = useTranslations();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box my={4}>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 3 }}>
          {t("DEPARTMENTS")}
        </Typography>
        <Stack spacing={2}>
          {data?.records.map((record) => (
            <DepartmentCard department={record} key={record.id} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
