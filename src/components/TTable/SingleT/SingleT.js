import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const singleT = props => {
  return (
    <TableRow>
      <TableCell align="center" colSpan={2}>
        Aktiva
      </TableCell>
      <TableCell align="center" colSpan={2}>
        Passiva
      </TableCell>
    </TableRow>
  );
};

export default singleT;
