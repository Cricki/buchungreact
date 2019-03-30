import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const header = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="display2" color="inherit">
          Accounting Records
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default header;
