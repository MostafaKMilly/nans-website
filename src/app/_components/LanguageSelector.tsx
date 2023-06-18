import { useRef, useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "../_hooks/useTranslations";

export const LanguageSelector = () => {
  const { handleChangeLanguage, language } = useTranslations();
  const anchorEl = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleMenuHover = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <IconButton
        disableRipple
        disableTouchRipple
        onMouseEnter={handleMenuHover}
        onMouseLeave={handleClose}
        ref={anchorEl}
        sx={{
          borderRadius: 5,
        }}
      >
        {language === "en" ? (
          <Image
            src="https://flagcdn.com/w160/gb.png"
            alt="EN"
            width={30}
            height={30}
            style={{
              borderRadius: "50%",
            }}
          />
        ) : (
          <Image
            src="https://flagcdn.com/w160/sa.png"
            alt="AR"
            width={30}
            height={30}
            style={{
              borderRadius: "50%",
            }}
          />
        )}
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
              minWidth: 100,
            },
            onMouseEnter: handleMenuHover,
            onMouseLeave: handleClose,
          },
        }}
      >
        <MenuItem onClick={() => handleChangeLanguage("en")}>EN</MenuItem>
        <MenuItem onClick={() => handleChangeLanguage("ar")}>AR</MenuItem>
      </Menu>
    </Box>
  );
};
