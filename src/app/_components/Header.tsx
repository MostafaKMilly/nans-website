"use client";

import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { DepartmentsDropdown } from "./DepartmentsDropdown";
import { ServicesDropdown } from "./ServicesDropdown";
import { LanguageSelector } from "./LanguageSelector";
import { useAuth } from "../_hooks/useAuth";
import { ProfileMenu } from "./ProfileMenu";
import { useRouter } from "next/navigation";

export const Header = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  return (
    <AppBar position="static" sx={{ bgcolor: "white" }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="logo"
            disableFocusRipple
            disableRipple
            disableTouchRipple
            onClick={() => router.push("/")}
          >
            <Image src={"/images/logo.svg"} alt="LOGO" width={50} height={50} />
          </IconButton>
          <Box
            flexGrow={1}
            justifyContent="right"
            alignItems="center"
            columnGap={3}
            mr={1}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              color: "common.black",
            }}
          >
            <Link
              href="about-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant="body2">About us</Typography>
            </Link>
            <DepartmentsDropdown />
            <ServicesDropdown />
            <Link
              href="laws-and-legislations"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant="body2">Laws And Legislations</Typography>
            </Link>
            <Button
              color="secondary"
              sx={{ px: 4, borderRadius: 5 }}
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </Button>
          </Box>
          <Box ml={"auto"} display="flex" alignItems="center" columnGap={1}>
            <LanguageSelector />
            {isAuthenticated && <ProfileMenu />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
