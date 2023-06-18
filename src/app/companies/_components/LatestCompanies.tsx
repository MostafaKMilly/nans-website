import API from "@/api/client";
import { CompaniesResponse } from "@/app/_types/companies.type";
import { useQuery } from "@tanstack/react-query";
import { Box, Typography, Stack, CircularProgress } from "@mui/material";
import { CompanyItemCard } from "./CompanyItemCard";
import { useTranslations } from "@/app/_hooks/useTranslations";

export const LatestCompanies = () => {
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
  const { t } = useTranslations();

  return (
    <Box width="100%">
      <Typography
        variant="h5"
        sx={{
          textAlign: "left",
          mb: 2,
          "&:after": {
            content: "''",
            display: "block",
            position: "relative",
            width: "90px",
            border: "1px solid black",
            mt: 1,
          },
        }}
      >
        {t("latest_companies")}
      </Typography>
      <Stack spacing={2}>
        {isCompaniesLoading ? (
          <CircularProgress />
        ) : (
          companies?.records?.map((company) => (
            <CompanyItemCard company={company} key={company.id} />
          ))
        )}
      </Stack>
    </Box>
  );
};
