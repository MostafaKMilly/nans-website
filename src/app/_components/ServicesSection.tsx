import API from "@/api/client";
import { useQuery } from "@tanstack/react-query";
import { ServicesResponse } from "../_types/service.type";
import {
  Paper,
  Typography,
  CircularProgress,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { ServiceCard } from "./ServiceCard";
import { useRouter } from "next/navigation";

export const ServicesSection = () => {
  const router = useRouter();

  const { data: services, isLoading: isServicesLoading } = useQuery(
    ["services"],
    () => API.get<ServicesResponse>("service"),
    {
      select: (res) => res.data,
    }
  );

  return (
    <Paper
      sx={{
        bgcolor: "rgba(45, 49, 146, 0.04)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 4,
      }}
      elevation={0}
    >
      <Typography variant="h3" sx={{ color: "common.black", mb: 2 }}>
        Our services
      </Typography>
      <Grid container spacing={2} justifyContent="space-around">
        {!isServicesLoading ? (
          services?.records.slice(0, 4).map((service) => (
            <Grid
              item
              key={service.id}
              xs={12}
              sm={4}
              md={3}
              display="flex"
              justifyContent="center"
            >
              <ServiceCard service={service} />
            </Grid>
          ))
        ) : (
          <CircularProgress sx={{ mt: 2 }} />
        )}
      </Grid>
      <Box width="100%" textAlign="right" mt={2}>
        <Button
          variant="text"
          onClick={() => {
            router.push("/services");
          }}
        >
          Show more
        </Button>
      </Box>
    </Paper>
  );
};
