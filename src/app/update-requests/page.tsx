"use client";
import API from "@/api/client";
import { useQuery } from "@tanstack/react-query";
import { UpdateRequestResponse } from "../_types/updateRequests.type";
import { GridColDef, DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Container } from "@mui/material";
import { useTranslations } from "../_hooks/useTranslations";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "phoneNumber", headerName: "Phone Number", width: 200 },
  { field: "isApproved", headerName: "Approved", width: 200, type: "boolean" },
  { field: "createdAt", headerName: "Created At", width: 200 },
];

export default function UpdateRequsts() {
  const { data: rows, isLoading } = useQuery(
    ["UpdateRequests"],
    () => API.get<UpdateRequestResponse>("user/updateRequest"),
    {
      select: (res) => res.data,
    }
  );
  const { t } = useTranslations();

  return (
    <Box my={2}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ my: 2 }}>
          {t("update_request")}
        </Typography>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            columns={columns}
            rows={rows?.records || []}
            loading={isLoading}
          />
        </div>
      </Container>
    </Box>
  );
}
