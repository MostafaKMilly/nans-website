import { Box, CircularProgress } from "@mui/material";

export const Loader = () => {
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
};
