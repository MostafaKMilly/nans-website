import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslations } from "@/app/_hooks/useTranslations";
import { useMutation } from "@tanstack/react-query";
import API from "@/api/client";
import { enqueueSnackbar } from "notistack";

export const UpdateUserPassword = () => {
  const { t } = useTranslations();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<{
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }>();
  const { mutateAsync } = useMutation<
    unknown,
    unknown,
    { oldPassword: string; newPassword: string }
  >((params) => API.patch("/user/updatePassword", params), {
    onSuccess: () => {
      enqueueSnackbar("Password updated successfully!", {
        variant: "success",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    },
  });

  const onSubmit = (data: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => {
    mutateAsync({
      newPassword: data.newPassword,
      oldPassword: data.oldPassword,
    }).then(() => {
      reset();
    });
  };

  const validateConfirmPassword = (value: string) => {
    const newPassword = getValues("newPassword");
    if (value !== newPassword) {
      return "The passwords do not match";
    }
    return true;
  };

  return (
    <Box mx="auto" width="100%" my={4}>
      <Typography variant="h5" align="left" gutterBottom>
        {t("update_password")}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("oldPassword")}
          label={t("current_password")}
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          {...register("newPassword", { required: true })}
          label={t("new_password")}
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          error={!!errors.newPassword}
          helperText={errors.newPassword && "New Password is required"}
        />
        <TextField
          {...register("confirmPassword", {
            required: true,
            validate: validateConfirmPassword,
          })}
          label={t("confirm_password")}
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword && errors.confirmPassword.message}
        />
        <Button type="submit" variant="contained" color="primary">
          {t("update_password")}
        </Button>
      </form>
    </Box>
  );
};
