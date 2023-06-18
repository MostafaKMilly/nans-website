import API from "@/api/client";
import { NewssResponse } from "@/app/_types/news,type";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Box, Typography, Stack, Paper, CircularProgress } from "@mui/material";
import { useTranslations } from "@/app/_hooks/useTranslations";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NewsItemCard } from "./NewsItemCard";

export const LatestNewsSection = () => {
  const { t } = useTranslations();
  const router = useRouter();

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
        {t("latest_news")}
      </Typography>
      <Stack spacing={2}>
        {isNewsLoading ? (
          <CircularProgress />
        ) : (
          news?.records?.map((news) => (
            <NewsItemCard news={news} key={news.id} />
          ))
        )}
      </Stack>
    </Box>
  );
};
