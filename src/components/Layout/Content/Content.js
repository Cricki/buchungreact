import React, { Component } from "react";
import { Fragment } from "react";

import TTable from "../../TTable/TTable";
import AccountLines from "../../AccountLines/AccountLines";
import FormDialog from "../../UI/FormDialog/FormDialog";

class Content extends Component {
  state = {
    //  Für T-Konten relevante Daten
    soll: null,
    haben: null,
    amount: null,
    vorsteuer: false,
    umsatzsteuer: false
  };

  handleAmountChange = event => {
    console.log(this.state.amount);
    this.setState({ amount: event.target.value });
    console.log(this.state.amount);
  };

  handleSollChange = event => {
    console.log(event.target.value);

    this.setState({ soll: event.target.value });
  };

  handleHabenChange = event => {
    console.log(event.target.value);

    this.setState({ haben: event.target.value });
  };

  handleChange = name => event => {
    console.log(event.target.value);
    this.setState({ [name]: event.target.value });
  };
  handleVorsteuerChange = event => {
    this.setState(prevState => ({
      vorsteuer: !prevState.vorsteuer
    }));
  };

  handleUmsatzsteuerChange = event => {
    this.setState(prevState => ({
      umsatzsteuer: !prevState.umsatzsteuer
    }));
  };

  render() {
    return (
      <Fragment>
        <AccountLines
          soll={this.state.soll}
          haben={this.state.haben}
          amount={this.state.amount}
          vorsteuer={this.state.vorsteuer}
          umsatzsteuer={this.state.umsatzsteuer}
        >
          {this.state.soll} {this.state.amount} an {this.state.haben}{" "}
          {this.state.amount}
        </AccountLines>
        <TTable />
        <FormDialog
          handleChange={this.handleChange}
          handleSollChange={this.handleSollChange}
          handleHabenChange={this.handleHabenChange}
          handleAmountChange={this.handleAmountChange}
          handleVorsteuerChange={this.handleVorsteuerChange}
          handleUmsatzsteuerChange={this.handleUmsatzsteuerChange}
          haben={this.state.haben}
          soll={this.state.soll}
          vorsteuer={this.state.vorsteuer}
          umsatzsteuer={this.state.umsatzsteuer}
        />
      </Fragment>
    );
  }
}

export default Content;
