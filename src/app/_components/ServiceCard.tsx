import Image from "next/image";
import { Service } from "../_types/service.type";
import { Paper, Box, Typography, Button } from "@mui/material";
import { useTranslations } from "../_hooks/useTranslations";

export const ServiceCard = ({ service }: { service: Service }) => {
  const { t } = useTranslations();

  return (
    <Paper
      sx={{
        minWidth: "280px",
        minHeight: "277px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "30px",
        p: 3,
      }}
      elevation={1}
    >
      <Image
        src={"/images/serviceplaceholder.svg"}
        height={200}
        width={300}
        alt="ServiceIamge"
      />
      <Box mt={1} sx={{ textAlign: "center" }}>
        <Typography variant="h4">{service.title}</Typography>
        <Button sx={{ borderRadius: "50px", mt: 2 }}>{t("show_more")}</Button>
      </Box>
    </Paper>
  );
};
