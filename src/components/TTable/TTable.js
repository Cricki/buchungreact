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

const TAX_RATE = 0.07;

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(id, desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { id, desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  ["Paperclips (Box)", 100, 1.15],
  ["Paper (Case)", 10, 45.99],
  ["Waste Basket", 2, 17.99]
].map((row, id) => createRow(id, ...row));

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

function TTable(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              Aktiva
            </TableCell>
            <TableCell align="center" colSpan={2}>
              Passiva
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <SingleT />
          <SingleT />
        </TableBody>
      </Table>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              Aktiva
            </TableCell>
            <TableCell align="center" colSpan={2}>
              Passiva
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <SingleT />
          <SingleT />
        </TableBody>
      </Table>
    </Paper>
  );
}

TTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TTable);
