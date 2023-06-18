"use client";
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Stack,
  Button,
} from "@mui/material";
import Image from "next/image";
import { useTranslations } from "../_hooks/useTranslations";
import { useInfiniteQuery } from "@tanstack/react-query";
import API from "@/api/client";
import { NewssResponse } from "../_types/news,type";
import { LatestNewsSection } from "./_components/LatestNewsSection";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { NewsItemCard } from "./_components/NewsItemCard";

export default function NewsPage() {
  const { t } = useTranslations();
  const [search, setSearch] = useState("");

  const {
    data: news,
    isLoading: isNewsLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["News", search],
    ({ pageParam = 0 }) =>
      API.get<NewssResponse>("news", {
        params: {
          sort: "createdAt",
          limit: 2,
          page: pageParam,
          ...(search && { search }),
        },
      }),
    {
      getNextPageParam: (lastPage, allPages) => {
        const currentPage = allPages.length - 1;
        if (currentPage * 2 < lastPage.data.totalRecords) {
          return currentPage + 1;
        }
        return undefined;
      },
    }
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

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
              {t("news.hero")}
            </Typography>
          </Box>
          <Image
            src="/images/news_hero.svg"
            alt="HeroImage"
            width={300}
            height={200}
          />
        </Container>
      </Paper>
      <Container maxWidth={false} sx={{ my: 4, maxWidth: "1400px !important" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <LatestNewsSection />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
            >
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
                {t("all_news")}
              </Typography>
              <TextField
                placeholder={`${t("search")} ...`}
                value={search}
                onChange={handleSearchChange}
                size="small"
                sx={{ width: "300px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box mt={2}>
              <Stack spacing={2}>
                {news?.pages
                  .flatMap((news) => news.data.records)
                  .map((news) => (
                    <NewsItemCard news={news} key={news.id} />
                  ))}
              </Stack>
            </Box>
            {hasNextPage && (
              <Button
                variant="text"
                sx={{ mt: 1 }}
                onClick={() => {
                  fetchNextPage();
                }}
              >
                {t("show_more")}
              </Button>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
