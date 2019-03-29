import React from "react";

import Paper from "@material-ui/core/Paper";

import classes from "./AccountLines";
const accountLines = props => {
  //    let amountSecond = {props.amount};

  return (
    <Paper className={classes.bgCol}>
      {props.soll == null || props.amount == null || props.haben == null
        ? "hi"
        : props.soll + props.amount + "an" + props.haben + props.amount}
    </Paper>
  );
};

export default accountLines;
