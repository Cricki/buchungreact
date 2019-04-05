import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const singleT = props => {
  return (
    <React.Fragment>
      <TableRow>
        <TableCell />
        <TableCell colSpan={3} align="center">
          {props.title}
        </TableCell>
        <TableCell />
      </TableRow>
      <TableRow>
        <TableCell align="center" colSpan={3}>
          Aktiva
        </TableCell>
        <TableCell />
        <TableCell align="center" colSpan={3}>
          Passiva
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default singleT;
