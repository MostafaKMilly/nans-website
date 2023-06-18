"use client";
import API from "@/api/client";
import { useQuery } from "@tanstack/react-query";
import { useParams, usePathname } from "next/navigation";
import {
  Box,
  CircularProgress,
  Paper,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { LatestCompanies } from "../_components/LatestCompanies";
import { ShareButtons } from "@/app/_components/ShareButton";
import { Company } from "@/app/_types/companies.type";
import { useTranslations } from "@/app/_hooks/useTranslations";

export default function NewsPage() {
  const params = useParams();
  const companyId = String(params?.companyId);
  const pathname = usePathname();

  const { data: company, isLoading: isCompaniesLoading } = useQuery(
    ["Companies", companyId],
    () => API.get<{ data: Company }>("licencedCompany/" + companyId),
    {
      select: (res) => res.data,
    }
  );
  const { t } = useTranslations();

  if (isCompaniesLoading) {
    return (
      <Box
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Paper elevation={0} sx={{ borderRadius: 0, height: 300 }}>
        <Image
          src={company?.image as string}
          alt="HeroImage"
          width={400}
          height={200}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </Paper>
      <Container maxWidth={false} sx={{ my: 4, maxWidth: "1400px !important" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <LatestCompanies />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <ShareButtons url={pathname} title="Nans-website" />
            <Typography variant="h3" sx={{ color: "common.black", mt: 2 }}>
              {company?.name}
            </Typography>

            <Typography variant="h5" sx={{ color: "grey.500", mt: 2 }}>
              {company?.createdAt.split("T")[0]}
            </Typography>

            <Typography variant="body1">
              <div
                dangerouslySetInnerHTML={{
                  __html: company?.description as string,
                }}
              />
            </Typography>

            <Typography variant="h5" sx={{ mb: 1 }}>
              {t("applications")}
            </Typography>
            {company?.applications?.map((app) => (
              <Typography variant="body1" key={app.name}>
                {app.name}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
