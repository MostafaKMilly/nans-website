import { Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Company } from "@/app/_types/companies.type";

export const CompanyItemCard = ({ company }: { company: Company }) => {
  const router = useRouter();

  return (
    <Paper
      key={company.id}
      sx={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => router.push(`/companies/${company.id}`)}
    >
      <Stack spacing={1} p={2}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {company.name}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <div
            dangerouslySetInnerHTML={{ __html: company.description as string }}
          />
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {company.createdAt.split("T")[0]}
        </Typography>
      </Stack>
      <Image
        src={company.image}
        width={200}
        height={200}
        style={{
          objectFit: "cover",
        }}
        alt="companyImage"
      />
    </Paper>
  );
};
