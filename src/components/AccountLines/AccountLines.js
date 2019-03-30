import React from "react";

import Paper from "@material-ui/core/Paper";

import classes from "./AccountLines";

const accountLines = props => {
  //    let amountSecond = {props.amount};

  return <Paper className={classes.bgCol}>{props.buchungsListe}</Paper>;
};

export default accountLines;
