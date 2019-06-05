import React from "react";

export default class Bill extends React.Component {
  render() {
    // console.log("props:", this.props);
    return (
      <tr style={{ width: "100%", textAlign: "center" }}>
        <td>{this.props.bill.details}</td>
        <td>{this.props.bill.amount}</td>
        <td>{this.props.bill.date}</td>
        <td>{this.props.bill.type}</td>
      </tr>
    );
  }
}
