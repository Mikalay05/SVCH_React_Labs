import React from "react";

import dataJsonTable from "../../Json/TableData.json";

//Material UI
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export default function TableAboutGramma() {
  let resultTable = dataJsonTable.map((element, index) => {
    return (
      <TableRow key={index}>
        <TableCell>{element.UserName}</TableCell>
        <TableCell>{element.Email}</TableCell>
        <TableCell>{element.PhoneNumber}</TableCell>
      </TableRow>
    );
  });

  const tableHeadName = Object.keys(dataJsonTable[0] || {});
  const resultHeadTable = tableHeadName.map((element, index) => {
    return (
        <TableCell key={index}>
            {element}
        </TableCell>
    )
  })
  return (
    <>
      <Table component={Paper}>
        <TableHead>
          <TableRow>
            {resultHeadTable}
          </TableRow>
        </TableHead>
        <TableBody>
            {resultTable}
        </TableBody>
      </Table>
    </>
  );
}
