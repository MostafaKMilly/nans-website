import React, { useLayoutEffect } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Box, CircularProgress } from "@mui/material";
import { Translation } from "./_types/translations.types";
import { useState } from "react";
import API from "@/api/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const TrnaslationContext = React.createContext<{
  translations: Translation | undefined;
  t: (key: string) => string;
  language: string;
  handleChangeLanguage: (language: string) => void;
}>({
  translations: {},
  t: () => [],
  language: "",
  handleChangeLanguage: () => {},
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const cacheLtr = createCache({
  key: "muiltr",
});

export const LocalizationProvider = ({ children }: React.PropsWithChildren) => {
  const [language, setLanguage] = useState<string>("en");
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: translations, isLoading: isTranslationsLoading } = useQuery(
    ["translations"],
    () => API.get<{ data: Translation }>("translation"),
    {
      select: (res) => res.data,
    }
  );

  useLayoutEffect(() => {
    if (localStorage.getItem("language")) {
      setLanguage(localStorage.getItem("language") || "en");
    }
  }, []);

  useLayoutEffect(() => {
    document.dir = language === "en" ? "ltr" : "rtl";
  }, [language]);

  const t = (key: string) => {
    if (translations) {
      const translation = translations[key];
      if (translation) {
        return translation;
      }
    }
    return key;
  };

  const handleChangeLanguage = (language: string) => {
    setLanguage(language);
    localStorage?.setItem("language", language);
    router.refresh();
    queryClient.refetchQueries();
  };

  const value = {
    translations,
    t,
    language,
    handleChangeLanguage,
  };

  if (isTranslationsLoading) {
    return (
      <Box
        display="flex"
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <CacheProvider value={language === "en" ? cacheLtr : cacheRtl}>
      <TrnaslationContext.Provider value={value}>
        {children}
      </TrnaslationContext.Provider>
    </CacheProvider>
  );
};
