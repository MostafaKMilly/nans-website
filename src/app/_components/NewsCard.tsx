import Image from "next/image";
import { Paper, Box, Typography, Button } from "@mui/material";
import { News } from "../_types/news,type";
import { useRouter } from "next/navigation";
import { useTranslations } from "../_hooks/useTranslations";
export const NewsCard = ({ news }: { news: News }) => {
  const router = useRouter();
  const { t } = useTranslations();

  return (
    <Paper
      sx={{
        maxWidth: "280px",
        width: "100%",
        Height: "277px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        pb: 2,
      }}
      elevation={0}
    >
      <Image
        src={news.image}
        width={400}
        height={200}
        style={{
          objectFit: "cover",
          width: "100%",
          borderRadius: "8px 8px 0px 0px",
        }}
        alt="newsImage"
      />
      <Box mt={1} sx={{ textAlign: "center" }}>
        <Typography variant="h4">{news.title}</Typography>
        <Button
          sx={{ borderRadius: "50px", mt: 2 }}
          color="secondary"
          onClick={() => {
            router.push(`/news/${news.id}`);
          }}
        >
          {t("show_more")}
        </Button>
      </Box>
    </Paper>
  );
};
