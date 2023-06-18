import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { News } from "@/app/_types/news,type";
import { useRouter } from "next/navigation";

export const NewsItemCard = ({ news }: { news: News }) => {
  const router = useRouter();

  return (
    <Paper
      key={news.id}
      sx={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => router.push(`/news/${news.id}`)}
    >
      <Stack spacing={1} p={2}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {news.title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {news.createdAt}
        </Typography>
      </Stack>
      <Image
        src={news.image}
        width={200}
        height={200}
        style={{
          objectFit: "cover",
        }}
        alt="NewsImage"
      />
    </Paper>
  );
};
