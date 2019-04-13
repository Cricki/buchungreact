import React from "react";

import Paper from "@material-ui/core/Paper";

import classes from "./AccountLines";

const accountLines = props => (
  <Paper>
    {props.buchungsListe.length < 1 ? (
      <ul>
        {props.buchungsListe.map((buchungsSatz, index) => (
          <li key={index}>{buchungsSatz}</li>
        ))}
      </ul>
    ) : (
      <ul>
        <li>{props.buchungsSatz}</li>
      </ul>
    )}
  </Paper>
);

export default accountLines;
