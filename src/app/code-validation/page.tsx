"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  Typography,
  Box,
  Avatar,
  Container,
} from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import API from "@/api/client";
import { enqueueSnackbar } from "notistack";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

type CodeValidationForm = {
  code: string;
};

export default function CodeValidationPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CodeValidationForm>();
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");
  const email = searchParams.get("email") as string;
  const router = useRouter();

  const { mutate: regenerateCode } = useMutation<
    unknown,
    unknown,
    { email: string }
  >((data) => API.patch("user/code", data), {
    onSuccess: () => {
      enqueueSnackbar("The code was successfully generated!", {
        variant: "success",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    },
  });

  const { mutate: validateCode } = useMutation<
    unknown,
    unknown,
    { email: string; code: string }
  >((data) => API.patch("user/validate", data), {
    onSuccess: () => {
      enqueueSnackbar("The user successfully validated!", {
        variant: "success",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    },
  });
  const onSubmit = (data: CodeValidationForm) => {
    validateCode(
      {
        code: data.code,
        email,
      },
      {
        onSuccess: () => {
          router.push("/login");
        },
      }
    );
  };

  const handleResendCode = () => {
    regenerateCode({ email });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box width="100%" mt={4}>
        <Button
          variant="text"
          startIcon={<ArrowBackOutlinedIcon />}
          onClick={() => {
            router.push("/login");
          }}
        >
          Login
        </Button>
      </Box>
      <Box
        sx={{
          pt: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <CheckCircleOutlineOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Code validation
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            label="Code"
            variant="outlined"
            margin="normal"
            fullWidth
            {...register("code", { required: "Code is required" })}
            error={!!errors.code}
            helperText={errors.code?.message}
          />
          <Box
            display="flex"
            flexDirection="column"
            rowGap={2}
            alignItems="left"
          >
            <Button
              onClick={handleResendCode}
              color="primary"
              variant="text"
              sx={{ textAlign: "left" }}
            >
              Did not receive a code! resend a new code
            </Button>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Validate Code
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
