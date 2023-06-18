import { useRef, useState } from "react";
import { Button, Menu, MenuItem, Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import API from "@/api/client";
import { useRouter } from "next/navigation";
import { useTranslations } from "../_hooks/useTranslations";

export const ServicesDropdown = () => {
  const anchorEl = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslations();

  const { data, isLoading } = useQuery(
    ["services"],
    () => API.get<Response>("service"),
    {
      select: (res) => res.data,
    }
  );

  const handleMenuHover = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="text"
        onMouseEnter={handleMenuHover}
        onMouseLeave={handleClose}
        ref={anchorEl}
        sx={{ fontSize: "body2.fontSize", fontWeight: "body2.fontWeight" }}
      >
        {t("SERVICES")}
      </Button>
      <Menu
        id="hover-menu"
        anchorEl={anchorEl.current}
        keepMounted
        open={open}
        onClose={handleClose}
        sx={{
          pointerEvents: "none",
        }}
        slotProps={{
          paper: {
            sx: {
              pointerEvents: "auto",
            },
            onMouseEnter: handleMenuHover,
            onMouseLeave: handleClose,
          },
        }}
      >
        {!isLoading ? (
          data?.records.map((record) => (
            <MenuItem
              key={record.id}
              value={record.id}
              onClick={() => {
                handleClose();
                router.push(`/services/${record.id}`);
              }}
            >
              {record.title}
            </MenuItem>
          ))
        ) : (
          <Box display="flex" alignItems="center" justifyContent="center">
            <CircularProgress />
          </Box>
        )}
      </Menu>
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
