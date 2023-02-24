import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import RomanRouter from "./routes/RomanRouter";
import RomanProvider from "./contexts/RomanContext";

export default function App() {
  return (
    <RomanProvider>
      <ThemeProvider theme={theme}>
        <RomanRouter />
      </ThemeProvider>
    </RomanProvider>
  );
}
