import React from "react";
import "./App.css";
import Table from "./Table";
import Form from "./Form";

class App extends React.Component {
  state = {
    formValue: {
      details: "",
      amount: 0,
      date: "",
      type: ""
    },
    selectedBill: null
  };

  createBill(event) {
    this.setState({
      formValue: {
        details: event.target.details.value,
        date: event.target.amount.value,
        amount: event.target.date.value,
        type: event.target.type.value
      }
    });
  }

  render() {
    return (
      <div>
        <Form />

        <Table />
      </div>
    );
  }
}

export default App;
