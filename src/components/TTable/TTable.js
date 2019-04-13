import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import SingleT from "./SingleT/SingleT";

function TTable(props) {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Aktiva
            </TableCell>
            <TableCell />
            <TableCell align="center" colSpan={4}>
              Passiva
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.aktivaAbteilungsList.map((title, index) => (
            <SingleT title={title} key={index} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default TTable;
