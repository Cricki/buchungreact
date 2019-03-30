import React from "react";

import Paper from "@material-ui/core/Paper";

import classes from "./AccountLines";

const accountLines = props => {
  //    let amountSecond = {props.amount};

  return (
    <Paper className={classes.bgCol}>
      <ul>
        {props.buchungsListe.map((buchungsSatz, index) => (
          <li key={index}>{buchungsSatz}</li>
        ))}
      </ul>
    </Paper>
  );
};

export default accountLines;
