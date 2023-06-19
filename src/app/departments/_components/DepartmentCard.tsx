import { Department } from "@/app/_types/department.type";
import React from "react";
import { Paper, Button, Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "@/app/_hooks/useTranslations";

export const DepartmentCard = ({ department }: { department: Department }) => {
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
        src={department.image}
        width={400}
        height={200}
        style={{
          objectFit: "cover",
          width: "100%",
          borderRadius: "8px 8px 0px 0px",
        }}
        alt="departmentImage"
      />
      <Box mt={1} sx={{ textAlign: "center" }}>
        <Typography variant="h4">{department.title}</Typography>
        <Button
          sx={{ borderRadius: "50px", mt: 2 }}
          color="secondary"
          onClick={() => {
            router.push(`/departments/${department.id}`);
          }}
        >
          {t("show_more")}
        </Button>
      </Box>
    </Paper>
  );
};
