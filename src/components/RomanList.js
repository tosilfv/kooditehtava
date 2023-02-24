import React, { useContext } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import { RomanContext } from "../contexts/RomanContext";
import Roman from "./Roman";

export default function RomanList() {
  const { romans } = useContext(RomanContext);
  const theme = useTheme();
  const romanList = romans.map((roman) => {
    return <Roman key={roman.id} roman={roman} />;
  });
  return (
    <TableContainer
      component={Paper}
      elevation={3}
      style={theme.layout.alignment}
    >
      <Table aria-label="roman table">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row">
              Number
            </TableCell>
            <TableCell component="th" scope="row">
              Id
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{romanList}</TableBody>
      </Table>
    </TableContainer>
  );
}
