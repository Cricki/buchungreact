import React from "react";

import Paper from "@material-ui/core/Paper";

import classes from "./AccountLines";
// const accountLines = props => <Paper>{this.props.children}</Paper>;
const accountLines = props => <Paper className={classes.bgCol}>Hallo from acclines</Paper>;

export default accountLines;