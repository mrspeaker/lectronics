import React from "react";
import ElectronCharge from "../ElectronCharge";
import { amps } from "../eqs";

export default React.createClass({

  getInitialState () {
    return {
      amps: 1,
      seconds: 1
    };
  },

  onAmpChange ( e ) {

    this.setState({ amps: e.target.value });

  },

  onTimeChange ( e ) {

    this.setState({ seconds: e.target.value });

  },

  render () {
    return <section className="Amps">
      <h3>Charges</h3>
      <div>
        Charge of one electron: <strong>{ ElectronCharge }</strong>.
      </div>
      <div>
        <input onChange={ this.onAmpChange } value={ this.state.amps } type="text" />
        Amp{ this.state.amps == 1 ? "" : "s" } for <br/>
        <input onChange={ this.onTimeChange} value={ this.state.seconds } type="text" />
        second{ this.state.seconds == 1 ? "" : "s" }, contains <br/>

        <strong>{ (amps( this.state.amps ) * this.state.seconds).toExponential( 3 ) }</strong> electrons.
      </div>
    </section>
  }

});
