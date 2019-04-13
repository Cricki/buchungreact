import React, { Component } from "react";
import { Fragment } from "react";

import TTable from "../../components/TTable/TTable";
import AccountLines from "../../components/AccountLines/AccountLines";
import FormDialog from "../../components/UI/FormDialog/FormDialog";

class Content extends Component {
  state = {
    //  Für T-Konten relevante Daten
    soll: "",
    haben: "",
    amount: 0,
    vorsteuer: false,
    umsatzsteuer: false,
    buchungsSatz: null,
    buchungsListe: [],
    aktivaAbteilungsList: [
      "Fuhrpark",
      "Rohstoffe",
      "Kasse",
      "Bank",
      "Forderungen",
      "Vorsteuer"
    ],
    passivaAbteilungsList: ["Eigenkapital", "Verbindlichkeiten", "Umsatzsteuer"]
  };

  handleBuchungsListeChange = () => {
    this.state.soll == null ||
    this.state.amount == null ||
    this.state.haben == null
      ? this.setState({
          buchungsSatz: "Noch kein Buchungssatz vorhanden"
        })
      : this.setState({
          buchungsSatz:
            this.state.soll +
            " " +
            this.state.amount +
            " an " +
            this.state.haben +
            " " +
            this.state.amount +
            "\n"
        });
    this.setState(prevState => ({
      buchungsListe: [...prevState.buchungsListe, this.state.buchungsSatz]
    }));
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
          buchungsSatz={this.state.buchungsSatz}
          buchungsListe={this.state.buchungsListe}
        >
          {this.state.soll} {this.state.amount} an {this.state.haben}{" "}
          {this.state.amount}
        </AccountLines>
        <TTable
          aktivaAbteilungsList={this.state.aktivaAbteilungsList}
          passivaAbteilungsList={this.state.passivaAbteilungsList}
        />
        <FormDialog
          handleBuchungsListeChange={this.handleBuchungsListeChange}
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
