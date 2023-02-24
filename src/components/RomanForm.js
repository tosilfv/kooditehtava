import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import { Box, Button, Paper, Typography, useTheme } from "@mui/material";
import { DispatchContext } from "../contexts/RomanContext";
import SaveIcon from "@mui/icons-material/Save";
import RomanInput from "./RomanInput";
import useInputForm from "../hooks/useInputForm";

export default function RomanForm() {
  const [number, handleNumberChange, resetNumber, numberError] = useInputForm();
  const { dispatch } = useContext(DispatchContext);
  const theme = useTheme();
  const handleSaveNumber = (evt) => {
    evt.preventDefault();
    if (!numberError) {
      dispatch({ type: "ADD-ROMAN", number, id: uuid() });
      resetNumber();
    }
  };
  return (
    <>
      <Typography variant="h4" style={theme.layout.alignment}>
        Input Roman numeral
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        style={theme.layout.alignment}
      >
        <Paper elevation={3} style={theme.layout.paper}>
          <RomanInput
            htmlFor="number"
            id="number"
            name="number"
            value={number}
            onChange={handleNumberChange}
            error={numberError}
          />
          <Button
            type="submit"
            onClick={handleSaveNumber}
            variant="outlined"
            startIcon={<SaveIcon />}
            disabled={numberError}
          >
            Save Roman Number
          </Button>
        </Paper>
      </Box>
    </>
  );
}
