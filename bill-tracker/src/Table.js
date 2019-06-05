import React from "react";
import bills from "./data";
import Bill from "./Bill";

export default class Table extends React.Component {
  state = {
    bills: bills
  };

  render() {
    // console.log(this.state.bills);
    return (
      <table class="ui celled table">
        <tbody>
          <tr style={{ textAlign: "center" }}>
            <th>Details</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
          </tr>
          {this.state.bills.map(bill => (
            <Bill bill={bill} />
          ))}
        </tbody>
      </table>
    );
  }
}
