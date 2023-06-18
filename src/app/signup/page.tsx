"use client";
import React from "react";
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
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import API from "@/api/client";
import { useRouter } from "next/navigation";
import Link from "../_components/Link";

type SignupFormData = {
  email: string;
  name: string;
  fatherName: string;
  motherName: string;
  gender: string;
  phoneNumber: string;
  password: string;
};

export default function SignupPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignupFormData>();
  const router = useRouter();

  const { mutate } = useMutation<{ id: string }, unknown, SignupFormData>(
    (data) => API.post("user", data)
  );

  const onSubmit = (data: SignupFormData) => {
    mutate(data, {
      onSuccess: (res) => {
        router.push("/code-validation?id=" + res.id + "&email=" + data.email);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          py: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
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
            label="Email Address"
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
            label="Name"
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message as string}
          />
          <Box display="flex" alignItems="center" columnGap={2}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Father's Name"
              type="text"
              id="fatherName"
              {...register("fatherName", {
                required: "Father's Name is required",
              })}
              error={!!errors.fatherName}
              helperText={errors.fatherName?.message as string}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Mother's Name"
              type="text"
              id="motherName"
              {...register("motherName", {
                required: "Mother's Name is required",
              })}
              error={!!errors.motherName}
              helperText={errors.motherName?.message as string}
            />
          </Box>
          <Box display="flex" columnGap={2} alignItems="center">
            <FormControl
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.gender}
            >
              <InputLabel>Gender</InputLabel>
              <Select
                id="gender"
                {...register("gender", { required: "Gender is required" })}
                label="Gender"
              >
                <MenuItem value="MALE">Male</MenuItem>
                <MenuItem value="FEMALE">Female</MenuItem>
              </Select>
              {errors.gender && (
                <Typography variant="body2" color="error">
                  {errors.gender.message || ""}
                </Typography>
              )}
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Phone Number"
              type="text"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message as string}
            />
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message as string}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
