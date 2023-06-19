import { Service } from "@/app/_types/service.type";
import { useForm } from "react-hook-form";
import { Button, TextField, Stack, Typography } from "@mui/material";
import { useTranslations } from "@/app/_hooks/useTranslations";
import { useMutation } from "@tanstack/react-query";
import API from "@/api/client";

export const ServiceForm = ({
  serviceForm,
  id,
}: {
  serviceForm: Service["serviceForm"];
  id?: string;
}) => {
  const { register, handleSubmit } = useForm();
  const { t } = useTranslations();
  const { mutate } = useMutation<
    unknown,
    unknown,
    {
      id?: string;
      userRequest?: Record<string, any>;
    }
  >((params) => API.post("/cRequest", params));

  const onSubmit = (data: Record<string, any>) => {
    console.log(data); // Handle the form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ color: "common.black", mb: 4 }}
      >
        {t("service_apply")}
      </Typography>

      <Stack spacing={2} mb={2}>
        {Object.entries(serviceForm?.form || {}).map(
          ([fieldName, fieldProps]) => (
            <TextField
              size="small"
              key={fieldName}
              {...fieldProps}
              {...register(fieldName, {
                required: fieldProps.validation?.required,
              })}
            />
          )
        )}
      </Stack>

      <Button type="submit" variant="contained" color="secondary" fullWidth>
        Submit
      </Button>
    </form>
  );
};
