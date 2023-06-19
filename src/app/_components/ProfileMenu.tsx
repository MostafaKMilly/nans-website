import { useRef, useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { useAuth } from "../_hooks/useAuth";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useTranslations } from "../_hooks/useTranslations";
import { useRouter } from "next/navigation";

export const ProfileMenu = () => {
  const anchorEl = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();
  const { t } = useTranslations();
  const router = useRouter();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton ref={anchorEl} disableRipple onClick={handleClick}>
        <PersonOutlineOutlinedIcon
          sx={{ color: "grey.500" }}
          fontSize="large"
        />
      </IconButton>
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
            onMouseLeave: handleClose,
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            router.push("/profile");
          }}
        >
          {t("my_profile")}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            router.push("/update-requests");
          }}
        >
          {t("update_request")}
        </MenuItem>
        <MenuItem
          onClick={() => {
            logout();
            handleClose();
          }}
        >
          {t("logout")}
        </MenuItem>
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
