import { useRef, useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAuth } from "../_hooks/useAuth";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export const ProfileMenu = () => {
  const anchorEl = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();
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
            logout();
            handleClose();
          }}
        >
          Logout
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
