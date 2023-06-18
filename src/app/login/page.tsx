"use client";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "../_hooks/useAuth";
import Link from "../_components/Link";
import { useTranslations } from "../_hooks/useTranslations";

export default function LoginPage() {
  const { t } = useTranslations();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();
  const { login } = useAuth();
  const { mutate } = useMutation<
    { data: { accessToken: string } },
    unknown,
    {
      email: string;
      password: string;
      fcmToken: string;
    }
  >((data) =>
    axios.post(process.env.NEXT_PUBLIC_API_URL + "/user/auth/login", data)
  );
  const onSubmit = (data: { email: string; password: string }) => {
    mutate(
      {
        ...data,
        fcmToken: "asdsd",
      },
      {
        onSuccess: (res) => {
          login(res.data.accessToken);
        },
      }
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t("LOGIN")}
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label={t("Email_Address")}
            autoComplete="email"
            autoFocus
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message as string}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label={t("password")}
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message as string}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={t("remember_me")}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {t("LOGIN")}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {t("forgot_password")}
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {t("signup_message")}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
