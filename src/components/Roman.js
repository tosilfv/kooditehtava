import React, { useContext } from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import { DispatchContext } from "../contexts/RomanContext";

export default function Roman({ roman }) {
  const { dispatch } = useContext(DispatchContext);
  const handleRemove = () => {
    dispatch({ type: "REMOVE-ROMAN", id: roman.id });
  };
  return (
    <TableRow key={roman.id}>
      <TableCell component="td" scope="row">
        {roman.number}
      </TableCell>
      <TableCell component="td" scope="row">
        {roman.id}
      </TableCell>
      <TableCell component="td" scope="row">
        <Button type="submit" onClick={handleRemove} variant="outlined">
          Remove
        </Button>
      </TableCell>
    </TableRow>
  );
}
