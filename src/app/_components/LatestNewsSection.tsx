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
  ButtonBase,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { NewssResponse } from "../_types/news.type";
import { NewsCard } from "./NewsCard";
import { useTranslations } from "../_hooks/useTranslations";

export const LatestNewsSection = () => {
  const router = useRouter();
  const { t } = useTranslations();

  const { data: news, isLoading: isNewsLoading } = useQuery(
    ["News"],
    () =>
      API.get<NewssResponse>("news", {
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
        {t("latest_news")}
      </Typography>
      <Grid container spacing={2} justifyContent="space-around">
        {!isNewsLoading ? (
          news?.records.map((news) => (
            <Grid
              item
              key={news.id}
              xs={12}
              sm={4}
              md={3}
              display="flex"
              justifyContent="center"
            >
              <NewsCard news={news} />
            </Grid>
          ))
        ) : (
          <CircularProgress sx={{ mt: 2 }} />
        )}
      </Grid>
      <Box width="100%" textAlign="left" mt={2}>
        <Button
          variant="text"
          onClick={() => {
            router.push("/news");
          }}
        >
          {t("show_more")}
        </Button>
      </Box>
    </Paper>
  );
};
