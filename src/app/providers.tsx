"use client";
import React, { useEffect, useState } from "react";
import { theme } from "@/theme/theme";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import { useRouter } from "next/navigation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const AuthContext = React.createContext<{
  isAuthenticated: boolean;
  login: (token?: string) => void;
  logout: () => void;
}>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const login = (token = "") => {
    setIsAuthenticated(true);
    localStorage.setItem("token", token);
    router.push("/");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    queryClient.clear();
    router.refresh();
    router.push("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    }
  }, []);

  const value = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          <AuthContext.Provider value={value}>
            {
              <main
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {children}
              </main>
            }
          </AuthContext.Provider>
        </SnackbarProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
