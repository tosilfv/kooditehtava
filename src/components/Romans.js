import React from "react";
import { Typography, useTheme } from "@mui/material";
import RomanForm from "./RomanForm";
import RomanList from "./RomanList";

export default function Romans() {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h4" style={theme.layout.alignment}>
        Convert Roman numerals to decimal
      </Typography>
      <RomanForm />
      <RomanList />
    </>
  );
}
