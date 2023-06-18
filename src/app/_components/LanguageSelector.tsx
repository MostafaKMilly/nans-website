import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
export const LanguageSelector = () => {
  const [language, setLanguage] = useState("en");
  const router = useRouter();
  const anchorEl = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const client = useQueryClient();

  useEffect(() => {
    if (localStorage.getItem("language")) {
      setLanguage(localStorage.getItem("language")!);
    }
  }, []);

  const changeLanguage = (language: string) => {
    setLanguage(language);
    localStorage?.setItem("language", language);
    router.refresh();
    client.refetchQueries();
  };

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
        <MenuItem onClick={() => changeLanguage("en")}>EN</MenuItem>
        <MenuItem onClick={() => changeLanguage("ar")}>AR</MenuItem>
      </Menu>
    </Box>
  );
};
