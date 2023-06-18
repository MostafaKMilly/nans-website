"use client";
import API from "@/api/client";
import { News, NewssResponse } from "@/app/_types/news.type";
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
import { LatestNewsSection } from "../_components/LatestNewsSection";
import { ShareButtons } from "../../_components/ShareButton";

export default function NewsPage() {
  const params = useParams();
  const newsId = String(params?.newsId);
  const pathname = usePathname();

  const { data: news, isLoading: isNewsLoading } = useQuery(
    ["News", newsId],
    () => API.get<{ data: News }>("news/" + newsId),
    {
      select: (res) => res.data,
    }
  );

  if (isNewsLoading) {
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

  news;
  return (
    <Box>
      <Paper elevation={0} sx={{ borderRadius: 0, height: 300 }}>
        <Image
          src={news?.image as string}
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
            <LatestNewsSection />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <ShareButtons url={pathname} title="Nans-website" />
            <Typography variant="h3" sx={{ color: "common.black", mt: 2 }}>
              {news?.title}
            </Typography>
            <Typography variant="h6" sx={{ color: "grey.500", mt: 2 }}>
              {news?.createdAt.split("T")[0]}
            </Typography>
            <Typography variant="body1">
              <div
                dangerouslySetInnerHTML={{
                  __html: news?.description as string,
                }}
              />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
