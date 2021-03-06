import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Switch from "@material-ui/core/Switch";

import classes from "./FormDialog.css";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

export default class FormDialog extends React.Component {
  state = {
    open: false,
    labelWidth: 0
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.handleBuchungsListeChange();
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="fab">
        <Fab
          color="primary"
          onClick={this.handleClickOpen}
          aria-label="Add"
          className={classes.fab}
        >
          <AddIcon />
        </Fab>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Eingabe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Geben sie die für den Buchungssatz relevanten Daten ein.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="amount"
              label="Betrag"
              type="number"
              fullWidth
              onChange={this.props.handleAmountChange}
            />
            <p>Vorsteuer:</p>
            <Switch
              color="primary"
              onClick={this.props.handleVorsteuerChange}
            />
            <p>Umsatzsteuer:</p>
            <Switch
              color="primary"
              onClick={this.props.handleUmsatzsteuerChange}
            />
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="soll-native-simple">Soll</InputLabel>
              <Select
                native
                value={this.props.soll}
                onChange={this.props.handleSollChange}
                inputProps={{
                  name: "soll",
                  id: "soll-native-simple"
                }}
              >
                <option value="" />
                <option value="" disabled>
                  Aktiva
                </option>
                <option value={"sollFuhrpark"}>Fuhrpark</option>
                <option value={"sollRohstoffe"}>Rohstoffe</option>
                <option value={"sollForderungen"}>Forderungen</option>
                <option value={"sollBank"}>Bank</option>
                <option value={"sollKasse"}>Kasse</option>
                <option value={"sollVorsteuer"}>Vorsteuer</option>
                <option value="" disabled>
                  Passiva
                </option>
                <option value={"sollEigenkapital"}>Eigenkapital</option>
                <option value={"sollVerb"}>Verb. LuL</option>
                <option value={"sollUmsatzsteuer"}>Umsatzsteuer</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="haben-native-simple">Haben</InputLabel>
              <Select
                native
                value={this.props.haben}
                onChange={this.props.handleHabenChange}
                inputProps={{
                  name: "haben",
                  id: "haben-native-simple"
                }}
              >
                <option value="" />
                <option disabled>Aktiva</option>
                <option value={"habenFuhrpark"}>Fuhrpark</option>
                <option value={"habenRohstoffe"}>Rohstoffe</option>
                <option value={"habenForderungen"}>Forderungen</option>
                <option value={"habenBank"}>Bank</option>
                <option value={"habenKasse"}>Kasse</option>
                <option value={"habenVorsteuer"}>Vorsteuer</option>
                <option disabled>Passiva</option>
                <option value={"habenEigenkapital"}>Eigenkapital</option>
                <option value={"habenVerb"}>Verb. LuL</option>
                <option value={"habenUmsatzsteuer"}>Umsatzsteuer</option>
              </Select>
            </FormControl>
            <br />
            <TextField
              id="standard-dense"
              label="Dense"
              // className={classNames(classes.textField, classes.dense)}
              margin="dense"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Abbrechen
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Senden
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
