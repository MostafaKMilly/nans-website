import API from "@/api/client";
import {
  Paper,
  Box,
  Typography,
  Button,
  Container,
  InputBase,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

export const NewsLetterSubscription = () => {
  const [email, setEmail] = useState("");

  const { mutate } = useMutation<unknown, unknown, { email: string }>(
    () =>
      API.post("newsletter", {
        email,
      }),
    {
      onSuccess: () => {
        enqueueSnackbar("Your email has been subscibed successfully", {
          variant: "success",
          autoHideDuration: 5000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
      },
    }
  );
  return (
    <Paper
      sx={{
        bgcolor: "#1F2266",
        position: "relative",
        px: 2,
        py: 6,
        borderRadius: 0,
        overflow: "hidden",
      }}
      elevation={0}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            color: "common.white",
            mb: 3,
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          Subscribe to our Newsletter
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            marginBottom: "20px",
            textAlign: {
              xs: "center",
              md: "left",
            },
            color: "common.white",
          }}
        >
          Keep up to date with our latest news and services.
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: {
              xs: "center",
              md: "left",
            },
            mt: 2,
            columnGap: 1,
          }}
        >
          <InputBase
            id="email"
            size="small"
            fullWidth
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              maxWidth: "550px",
              bgcolor: "common.white",
              border: ({ palette }) => `1px solid ${palette.secondary.main}`,
              borderRadius: "8px",
              px: 2,
              py: 1,
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              mutate(
                { email },
                {
                  onSuccess: () => {
                    setEmail("");
                  },
                }
              );
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Container>
      <Box
        component={"img"}
        src="/images/subscribe.svg"
        width={200}
        height={200}
        sx={{
          position: "absolute",
          right: "10%",
          top: "62px",
          display: {
            xs: "none",
            lg: "inline",
          },
        }}
        alt="subscribe"
      />
    </Paper>
  );
};
