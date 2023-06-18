"use client";

import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  ListItem,
  List,
  ListItemText,
  ListItemButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Image from "next/image";
import { DepartmentsDropdown } from "./DepartmentsDropdown";
import { ServicesDropdown } from "./ServicesDropdown";
import { LanguageSelector } from "./LanguageSelector";
import { useAuth } from "../_hooks/useAuth";
import { ProfileMenu } from "./ProfileMenu";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "./Link";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import API from "@/api/client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const languages = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Arabic",
    value: "ar",
  },
];

export const Header = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const client = useQueryClient();
  const { data: departments } = useQuery(
    ["departments"],
    () => API.get<Response>("department"),
    {
      select: (res) => res.data,
    }
  );
  const { data: services } = useQuery(
    ["services"],
    () => API.get<Response>("service"),
    {
      select: (res) => res.data,
    }
  );

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "white" }} elevation={0}>
        <Container maxWidth="xl">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              sx={{
                color: "common.black",
                mr: 2,
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
              disableRipple
              onClick={handleDrawerToggle}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="logo"
              disableFocusRipple
              disableRipple
              disableTouchRipple
              onClick={() => router.push("/")}
            >
              <Image
                src={"/images/logo.svg"}
                alt="LOGO"
                width={50}
                height={50}
              />
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
                sx={{
                  px: 4,
                  borderRadius: 5,
                  display: isAuthenticated ? "none" : "flex",
                }}
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
              </Button>
              <LanguageSelector />
            </Box>
            <Box ml={"auto"}>{isAuthenticated && <ProfileMenu />}</Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          width: "100%",
          "& .MuiDrawer-paper": {
            width: "100%",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: "common.black" }}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <List sx={{ textAlign: "center" }}>
          <ListItemButton
            sx={{ justifyContent: "center" }}
            onClick={handleDrawerToggle}
          >
            <Link href="/" sx={{ textDecoration: "none" }}>
              <ListItemText
                primary="Home"
                primaryTypographyProps={{
                  variant: "h6",
                }}
              />
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ justifyContent: "center" }}>
            <Link href="/about-us" sx={{ textDecoration: "none" }}>
              <ListItemText
                primary="About us"
                primaryTypographyProps={{
                  variant: "h6",
                }}
              />
            </Link>
          </ListItemButton>

          <Accordion
            disableGutters
            sx={{
              boxShadow: "none !important",
              "&:before": {
                display: "none !important",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "grey.700",
                    "&:before": {
                      border: "none !important",
                    },
                  }}
                />
              }
              sx={{
                px: 0,
                "& .MuiAccordionSummary-content": {
                  pl: 2,
                  justifyContent: "center",
                },
              }}
            >
              <Typography variant="h6">Departments</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {departments &&
                departments.records.map((department) => (
                  <Link
                    href={`/departments/${department.id}`}
                    key={department.id}
                    sx={{ textDecoration: "none" }}
                  >
                    <ListItemButton onClick={handleDrawerToggle}>
                      <ListItemText
                        primary={department.title}
                        primaryTypographyProps={{
                          variant: "h6",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                ))}
            </AccordionDetails>
          </Accordion>

          <Accordion
            disableGutters
            sx={{
              boxShadow: "none !important",
              "&:before": {
                display: "none !important",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "grey.700",
                    "&:before": {
                      border: "none !important",
                    },
                  }}
                />
              }
              sx={{
                px: 0,
                "& .MuiAccordionSummary-content": {
                  pl: 2,
                  justifyContent: "center",
                },
              }}
            >
              <Typography variant="h6">Services</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {services &&
                services.records.map((department) => (
                  <Link
                    href={`/departments/${department.id}`}
                    key={department.id}
                    sx={{ textDecoration: "none" }}
                  >
                    <ListItemButton onClick={handleDrawerToggle}>
                      <ListItemText
                        primary={department.title}
                        primaryTypographyProps={{
                          variant: "h6",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                ))}
            </AccordionDetails>
          </Accordion>
          <ListItemButton
            sx={{ justifyContent: "center" }}
            onClick={() => {
              handleDrawerToggle();
            }}
          >
            <Link href="laws-and-legislations" sx={{ textDecoration: "none" }}>
              <ListItemText
                primary="Laws and legislations"
                primaryTypographyProps={{
                  variant: "h6",
                }}
              />
            </Link>
          </ListItemButton>
          <Accordion
            disableGutters
            sx={{
              boxShadow: "none !important",
              "&:before": {
                display: "none !important",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "grey.700",
                    "&:before": {
                      border: "none !important",
                    },
                  }}
                />
              }
              sx={{
                px: 0,
                "& .MuiAccordionSummary-content": {
                  pl: 2,
                  justifyContent: "center",
                },
              }}
            >
              <Typography variant="h6">Languages</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {languages.map((language) => (
                <ListItemButton
                  key={language.value}
                  onClick={() => {
                    handleDrawerToggle();
                    localStorage?.setItem("language", language.value);
                    router.refresh();
                    client.refetchQueries();
                  }}
                >
                  <ListItemText
                    primary={language.label}
                    primaryTypographyProps={{
                      variant: "h6",
                    }}
                  />
                </ListItemButton>
              ))}
            </AccordionDetails>
          </Accordion>
          <Box p={2}>
            <Button
              fullWidth
              color="secondary"
              sx={{
                display: isAuthenticated ? "none" : "flex",
              }}
              onClick={() => {
                router.push("/login");
                handleDrawerToggle();
              }}
            >
              Login
            </Button>
          </Box>
        </List>
      </Drawer>
    </>
  );
};

type Response = {
  data: {
    totalRecords: number;
    records: Array<{
      id: string;
      title: string;
      image: string;
      createdAt: string;
    }>;
  };
};
