"use client";
import API from "@/api/client";
import { useQuery } from "@tanstack/react-query";
import { UpdateRequestResponse } from "../_types/updateRequests.type";
import { GridColDef, DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Container } from "@mui/material";
import { useTranslations } from "../_hooks/useTranslations";
import { ClientRequestResponse } from "../_types/cRequest.type";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "status", headerName: "Status", width: 200 },
  { field: "service.id", headerName: "Service ID", width: 200 },
  { field: "service.title", headerName: "Service Title", width: 200 },
  { field: "department.id", headerName: "Department ID", width: 200 },
  { field: "department.title", headerName: "Department Title", width: 200 },
  { field: "createdAt", headerName: "Created At", width: 200 },
];

export default function ClientRequests() {
  const { data, isLoading } = useQuery(
    ["cRequest"],
    () => API.get<ClientRequestResponse>("cRequest"),
    {}
  );
  const { t } = useTranslations();

  const rows = data?.data.records?.map((record) => ({
    id: record.id,
    status: record.status,
    "service.id": record.service.id,
    "service.title": record.service.title,
    "department.id": record.department.id,
    "department.title": record.department.title,
    createdAt: record.createdAt,
  }));

  return (
    <Box my={2}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ my: 2 }}>
          {t("update_request")}
        </Typography>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid columns={columns} rows={rows || []} loading={isLoading} />
        </div>
      </Container>
    </Box>
  );
}
