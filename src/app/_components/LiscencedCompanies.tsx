import API from "@/api/client";
import { useQuery } from "@tanstack/react-query";
import {
  Paper,
  Typography,
  CircularProgress,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { CompaniesResponse } from "../_types/companies.type";
import { useTranslations } from "../_hooks/useTranslations";

export const LiscencedCompanies = () => {
  const router = useRouter();
  const { t } = useTranslations();

  const { data: companies, isLoading: isCompaniesLoading } = useQuery(
    ["Companies"],
    () =>
      API.get<CompaniesResponse>("licencedCompany", {
        params: {
          sort: "createdAt",
          limit: 4,
          page: 0,
        },
      }),
    {
      select: (res) => res.data,
    }
  );
  return (
    <Paper
      sx={{
        bgcolor: "rgba(255, 205, 17, 0.09)",
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
        {t("Liscenced_companies")}
      </Typography>
      <Grid container spacing={2} justifyContent="space-around">
        {!isCompaniesLoading ? (
          companies?.records.map((comapny) => (
            <Grid
              item
              key={comapny.id}
              xs={12}
              sm={4}
              md={3}
              display="flex"
              justifyContent="center"
            >
              <Box display="flex" alignItems="center" flexDirection="column">
                <Box
                  component="img"
                  src={"/images/company.png"}
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                />
                <Typography variant="h5" align="center" sx={{ mt: 1 }}>
                  {comapny.name}
                </Typography>
              </Box>
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
            router.push("/companies");
          }}
        >
          {t("show_more")}
        </Button>
      </Box>
    </Paper>
  );
};
